const packageValidation = async (data) => {
  if (!data.sellerId) throw Error('Unuthorized access, Please sign in');
  if (!data.title) throw Error('No first Name');
  if (!data.location) throw Error('No location');
  if (!data.city) throw Error('No city');
  if (!data.state) throw Error('No state');
  if (!data.category) throw Error('No sell category');
  if (!data.material) throw Error('No material');
  if (!data.conditions) throw Error('No condition');
  if (!data.price) throw Error('No price');
  if (!data.description) throw Error('No package description');
  if (!JSON.parse(data?.files).length) throw Error('No package images');
};

module.exports = { packageValidation };
