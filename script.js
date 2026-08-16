document.addEventListener("DOMContentLoaded", function () {

  const followButton = document.querySelector(".follow");

  if (followButton) {
    followButton.addEventListener("click", function () {

      if (followButton.textContent === "Follow") {
        followButton.textContent = "Following";
      } else {
        followButton.textContent = "Follow";
      }

    });
  }

  const messageButton = document.querySelector(".message");

  if (messageButton) {
    messageButton.addEventListener("click", function () {
      alert("Thanks for contacting Dress Decode!");
    });
  }

});
