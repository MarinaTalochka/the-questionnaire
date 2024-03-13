const form = document.querySelector(".form");
const nameNew = document.querySelector('.name');
const family = document.querySelector('.secondName')
const emailNew = document.querySelector('.email');
const phoneNew = document.querySelector('.phone');


form.addEventListener("submit", async (event) => {
  const nameValue = nameNew.value;
  const familyValue = family.value;
  const emailValue = emailNew.value;
  const phoneValue = phoneNew.value;
  event.preventDefault();
  
  try {
    const response = await fetch("https://polinashneider.space/user", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer: MarinaTalochka"
      },
      body: JSON.stringify({
        "name": nameValue,
        "secondName": familyValue,
        "phone": phoneValue,
        "email": emailValue,
        "agree": true
      })
    });

    if (response.ok) {
      alert("Данные успешно отправлены!");
      form.reset();
    } else {
      alert("Произошла ошибка при отправке данных.");
    }
  } catch (error) {

    alert("Произошла ошибка при отправке данных.");
  }
});