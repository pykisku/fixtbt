import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, Button, Steps } from "antd";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import ServiceSelection from "../components/Booking/ServiceSelection";
import StaffSelection from "../components/Booking/StaffSelection";
import AvailabilitySelection from "../components/Booking/AvailabilitySelection";
import UserDetailForm from "../components/Booking/UserDetailForm";

const { Step } = Steps;

function BookingPage() {
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [staff, setStaff] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  async function fetchServices() {
    try {
      const response = await fetch("/api/squareServices", { method: "GET" });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch services:", error);
      throw error;
    }
  }

  async function fetchStaff(serviceId, version) {
    try {
      const response = await fetch(
        `/api/squareStaff/?serviceid=${serviceId}&version=${version}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("fetch staff data: ", data);
      return data.bookableStaff;
    } catch (error) {
      console.error("Failed to fetch staff:", error);
      throw error;
    }
  }

  async function fetchAvailability(serviceId, staffId, version) {
    try {
      const response = await fetch(
        `/api/squareAvailability/?staffid=${staffId}&serviceid=${serviceId}&version=${version}`,
        { method: "GET" }
      );

      if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("data response: ", data);
      return data.availabilities;
    } catch (error) {
      console.error("Failed to fetch availability:", error);
      throw error;
    }
  }

  useEffect(() => {
    fetchServices()
      .then(setServices)
      .catch((error) => console.error("Failed to fetch services:", error));
  }, []);

  function handleServiceSelect(service) {
    console.log("Selected service:", service);
    setSelectedService(service);

    // Fetch staff for the selected service
    fetchStaff(service.id, service.version).then((staff) => {
      console.log("Fetched staff:", staff);

      // If there's no staff, hard code it
      if (staff.length === 0) {
        const hardcodedStaff = {
          teamMemberId: "_bcBhtlMQrVJjLiVBGEj",
          // Add other necessary properties here
        };

        setStaff([hardcodedStaff]);
        setSelectedStaff(hardcodedStaff);
        fetchAvailability(
          service.itemData.variations[0].id,
          hardcodedStaff.teamMemberId
        ).then(setAvailableSlots);
      } else {
        setStaff(staff);

        // If there is only one staff member, select them automatically
        if (staff.length === 1) {
          setSelectedStaff(staff[0]);
          fetchAvailability(service.id, staff[0].teamMemberId).then(
            setAvailableSlots
          );
        }
      }
    });
  }

  function handleSlotSelect(slot) {
    setSelectedSlot(slot);
  }

  function handleStaffSelect(staff) {
    setSelectedStaff(staff);
    // Fetch availability for the selected service and staff
    fetchAvailability(selectedService.id, staff.teamMemberId).then(
      setAvailableSlots
    );
  }

  function handleFormSubmit(details) {
    createCustomer(details).then((customer) => {
      createAppointment({ ...details, customerId: customer.id }).then(
        (appointment) => {
          router.push(`/confirmation/${appointment.id}`);
        }
      );
    });
  }

  const pickupInterval = 5000; // You may want to change this interval based on the available slots interval
const formatDateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

function formatSelectedService(service) {
  const name = service?.itemData?.name || '';
 // const priceAmount = service?.itemData.variations[0]?.pricing.price || 0;
  return name;
}

function formatSelectedSlot(slot) {
  const startAt = new Date(slot?.startAt);
  const endAt = new Date(startAt.getTime() + pickupInterval * 60 * 1000);
  const date = startAt.toLocaleDateString('en-US', formatDateOptions);
  const time = `${startAt.toLocaleTimeString()} - ${endAt.toLocaleTimeString()}`;

  return !isNaN(startAt) ? `${date}, ${time}` : '';
}

const steps = [
  {
    title: "Select Service",
    content: (
      <>
        <h2>Selected Service:</h2>
        <p>{formatSelectedService(selectedService)}</p>
        <ServiceSelection services={services} onSelect={handleServiceSelect} />
      </>
    ),
  },
  {
    title: "Select Time Slot",
    content: selectedService && (
      <>
        <h2>Selected Slot:</h2>
        <p>{formatSelectedSlot(selectedSlot)}</p>
        <AvailabilitySelection
          slots={availableSlots}
          onSelect={handleSlotSelect}
        />
      </>
    ),
  },
  {
    title: "Enter Details",
    content: selectedSlot && Object.keys(selectedSlot).length > 0 && (
      <>
        <h2>Selected Service & Slot:</h2>
        <p>
          {formatSelectedService(selectedService)}, {formatSelectedSlot(selectedSlot)}
        </p>
        <UserDetailForm onSubmit={handleFormSubmit} />
      </>
    ),
  },
];

  function handleSlotSelect(slot) {
    console.log("selected slot: ",slot);
    setSelectedSlot(slot);
    // Adding the highlight class to the selected button
    const selectedButton = document.querySelector(
      `button[data-id='${slot.id}']`
    );
    if (selectedButton) {
      selectedButton.classList.add("selected");
    }
  }

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Appointment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Appointment"
        imgClass="bg-1"
      />
      <div className="container">
        <div className="booking-steps">
          <Steps current={currentStep}>
            {steps.map((step, index) => (
              <Step key={index} title={step.title} />
            ))}
          </Steps>
        </div>
        <Card className="step-content">{steps[currentStep].content}</Card>
        <div className="steps-action">
          {currentStep < steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button type="primary" onClick={() => console.log("Done")}>
              Done
            </Button>
          )}
          {currentStep > 0 && (
            <Button
              style={{ margin: "0 8px" }}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
      <FunFactStyleOne />
      <Subscribe />
      <Footer />
    </>
  );
}

function ConfirmationPage({ appointment }) {
  return <div>{/* Show appointment details */}</div>;
}

ConfirmationPage.getInitialProps = async ({ query }) => {
  const appointment = await getAppointment(query.id);
  return { appointment };
};

export default BookingPage;
