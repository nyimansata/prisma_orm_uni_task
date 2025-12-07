document
  .getElementById("appointmentForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      age: formData.get("age"),
    };

    await fetch("/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Appointment submitted!");
    location.reload();
  });

// DELETE USER
function deleteUser(id) {
  fetch(`/api/v1/users/${id}`, { method: "DELETE" }).then(() =>
    location.reload()
  );
}

// EDIT USER (simple prompt version)
function editUser(id) {
  const firstName = prompt("Enter new first name:");
  const lastName = prompt("Enter new last name:");
  const age = prompt("Enter new age:");

  fetch(`/api/v1/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, age }),
  }).then(() => location.reload());
}
