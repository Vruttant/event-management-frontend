const computeAverageRatingOfEvent = (event) => {
  let totalReviews = event.reviews.length;
  let eventScore = 0;
  for (let i = 0; i < totalReviews; i++) {
    eventScore += parseInt(event.reviews[i].rating);
  }

  let totalScore = eventScore / totalReviews;
  return totalScore;
};

const removeDuplicatesFromArray = (array) => {
  return array.filter((item, index) => array.indexOf(item) === index);
};

export { computeAverageRatingOfEvent, removeDuplicatesFromArray };
