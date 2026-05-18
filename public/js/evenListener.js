  // event listener for form submission
$(document).ready(function () {
  $("#saveTransaction").on("submit", function (e) {
    e.preventDefault(); // cegah reload halaman

    const amount = $("input[name='amount']").val();
    const category = $("select[name='category']").val();
    const type = $("select[name='type']").val();
    const date = $("input[name='date']").val();

    $.ajax({
      url: "/home/v1/home",
      method: "POST",
      data: { category, amount, type, date },
      success: function (res) {
        alert("Transaction Saved!");
        location.reload(); // reload halaman setelah submit
      },
      error: function (err) {
        console.error(err);
        alert("Failed to save transaction!");
      },
    });
  });
});


  // event listener for delete button
$(document).on("click", ".btn-delete-id", function (e) {
  e.preventDefault();
  const transactionId = $(this).data("id");
  const confirmed = confirm(
    "Are you sure you want to delete this transaction?",
  );

  if (!confirmed) {
    return;
  }

  $.ajax({
    url: `/home/v1/home/${transactionId}`,
    method: "DELETE",
    success: function () {
      alert("Transaction Deleted!");
      location.reload();
    },
    error: function (err) {
      console.error(err);
      alert("Failed");
    },
  });
});

  // event listener for edit button
$(document).on("submit", "#editForm", function (e) {
  e.preventDefault();

  const submitBtn = e.originalEvent.submitter;
  const transactionIdEdit = $(submitBtn).data("id");

  const formData = $(this).serializeArray();
  const payload = {};
  formData.forEach((item) => (payload[item.name] = item.value));

  console.log("Payload:", payload);

  $.ajax({
  url: `/home/v1/home/${transactionIdEdit}`,
  method: "PUT",
  contentType: "application/json",
  data: JSON.stringify(payload),
  success: function (res) {
    alert("Update success!");
    location.reload();
  },
  error: function (err) {
    console.error(err);
    alert("Update failed!");
  },
});

});

  // event listener for edit button to show overlay
$(document).on("click", ".btn-edit", function () {
  const id = $(this).data("id");

  console.log("ID dari tombol Edit:", id); 

  $("#deleteBtn").attr("data-id", id);
  $("#updateBtn").attr("data-id", id);

  $("#editOverlay").show();
});

$("#closeOverlay").on("click", function () {
  $("#editOverlay").hide();
});
