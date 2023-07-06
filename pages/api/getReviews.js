const getPlaceReviews = async (req, res) => {
  const placeId  = process.env.PLACEID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (placeId) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=name,rating,reviews`
      );
      
      const data = await response.json();
      console.log(data);
      const { result } = data;
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(400).json({ message: "Place ID is required" });
  }
};

export default getPlaceReviews;