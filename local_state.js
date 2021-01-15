window.loadUserState = () => {
  const loadedUserState = localStorage.getItem("userState");

  if (loadedUserState === null) {
    const freshUserState = {
      starCount: [0],
      submittedAnswer: null,
      submittedStep: null,
    };

    window.state = freshUserState;
    localStorage.setItem("userState", JSON.stringify(freshUserState));
    return;
  }

  window.state = JSON.parse(loadedUserState);
};

window.saveUserState = (state) => {
  window.state = state;
  localStorage.setItem("userState", JSON.stringify(state));
};

window.addEventListener("load", window.loadUserState);
