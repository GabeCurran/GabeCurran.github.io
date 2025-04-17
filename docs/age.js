// don't dox me please lol
const dob = new Date(2001, 3, 9);
const now = new Date();
let age   = now.getFullYear() - dob.getFullYear();

if (
  now.getMonth() < dob.getMonth() ||
  (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())
) {
  age--;
}
document.getElementById('age').textContent = age;
