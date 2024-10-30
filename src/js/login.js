// Login in the application
async function login(email, password) {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const { status } = res;

    if (status === 401) {
      throw new Error("Invalid credentials!");
    }

    const data = await res.json();

    const { access_token } = data;
    localStorage.setItem("access_token", access_token);

    location.href = "http://localhost:5500/src";
  } catch (e) {
    window.alert(e);
  }
}

