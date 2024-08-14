document.getElementById("btn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const result = document.getElementById("result");

  if (name) {
    const khodam = cekKhodam(name);
    result.innerHTML = `Khodam Anda: <strong>${khodam}</strong>;`;
  } else {
    result.innerHTML = `<span style="color: red;">Silahkan masukan nama anda!</span>`;
  }
});

// document.getElementById("name").addEventListener("input", function () {
//   const result = document.getElementById("result");
//   result.innerHTML = "";
// });

function cekKhodam(nama) {
  const khodams = ["Monyet Kayang", "Pocong Busuk", "Kunti Daster", "Macan Goyang", "Elang Mabok", "Tuyul", "Bebek Penyet", "Buaya Darat"];
  const index = Math.floor(Math.random() * khodams.length);
  return khodams[index];
}
