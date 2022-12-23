const ConvertDateToLocale = (inputDate) => {
  let newDateObject = new Date(inputDate);
  let outputDate = newDateObject
    .toLocaleDateString("en-in")
    .replace(/\//g, "-");
  return outputDate;
};

export { ConvertDateToLocale };
