const packageValidation = async (data) => {
  if (!data.userId) throw Error("Unuthorized access, Please sign in");
  if (!data.packageName) throw Error("No package Name");

  if (!data.firstName) throw Error("No first Name");
  if (!data.lastName) throw Error("No last Name");
  if (!data.email) throw Error("No email");
  if (!data.telephone) throw Error("No telephone");
  if (!data.pickupAddress) throw Error("No address for pickup");
  if (!data.pickupCity) throw Error("NO city for pickup");
  if (!data.pickupState) throw Error("No State for pickup");
  if (!data.deliveryAddress) throw Error("No delivery address");
  if (!data.deliveryCity) throw Error("No delivery city");
  if (!data.deliveryState) throw Error("No delivery State");
  if (!data.postCode) throw Error("No postcode");
  if (!JSON.parse(data.files).length) throw Error("No package images");
  if (!data.receiverTelephone) throw Error("No package receiver's telephone");
};

module.exports = { packageValidation };
