import { catalogApi } from "../../utils/square-client";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const locationId = process.env.SQUARE_LOCATION_ID;
console.log(locationId);
  try {
    const { result: { items } } = await catalogApi.searchCatalogItems({
      enabledLocationIds: [ locationId ],
      productTypes: [ "APPOINTMENTS_SERVICE" ]
    });

    const services = items || [];

    // Create a replacer function to handle BigInt values
    const replacer = (key, value) => {
      if (typeof value === 'bigint') {
        return value.toString();
      }
      return value;
    };

    // Stringify the services array with the custom replacer
    const servicesJson = JSON.stringify(services, replacer);
  // console.log(servicesJson);
    res.status(200).send(servicesJson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve services' });
  }
};



// const API_BASE = 'https://connect.squareup.com';
// const ACCESS_TOKEN = process.env.SB_SQUARE_ACCESS_TOKEN;
// export async function fetchServices() {
//     const res = await fetch(`${API_BASE}/v2/catalog/list`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${ACCESS_TOKEN}`,
//         'Content-Type': 'application/json'
//       },
//     });
//     const data = await res.json();
//     return data.objects;
//   }
  
//   export async function fetchAvailability(serviceId, locationId) {
//     const res = await fetch(`${API_BASE}/v2/merchants/${merchantId}/availability/search`, {
//       method: 'POST',
//       body: JSON.stringify({ serviceId, locationId }),
//       headers: {
//         'Authorization': `Bearer ${ACCESS_TOKEN}`,
//         'Content-Type': 'application/json'
//       },
//     });
//     const data = await res.json();
//     return data.available_slots;
//   }
  
//   export async function createCustomer(details) {
//     const res = await fetch(`${API_BASE}/v2/customers`, {
//       method: 'POST',
//       body: JSON.stringify({ customer: details }),
//       headers: {
//         'Authorization': `Bearer ${ACCESS_TOKEN}`,
//         'Content-Type': 'application/json'
//       },
//     });
//     const data = await res.json();
//     return data.customer;
//   }
  
//   export async function createAppointment(details) {
//     const res = await fetch(`${API_BASE}/v2/appointments`, {
//       method: 'POST',
//       body: JSON.stringify({ appointment: details }),
//       headers: {
//         'Authorization': `Bearer ${ACCESS_TOKEN}`,
//         'Content-Type': 'application/json'
//       },
//     });
//     const data = await res.json();
//     return data.appointment;
//   }
  
//   export async function getAppointment(appointmentId) {
//     const res = await fetch(`${API_BASE}/v2/appointments/${appointmentId}`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${ACCESS_TOKEN}`,
//         'Content-Type': 'application/json'
//       },
//     });
//     const data = await res.json();
//     return data.appointment;
//   }


