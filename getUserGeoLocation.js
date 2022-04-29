navigator.geolocation.getCurrentPosition(
  res => {
//   Success
  const latitude = res.coords.latitude;
  const longitude = res.coords.longitude;
},
  
error => {
//   Error
  const code = error.code;
  const message = error.message;
}
);
