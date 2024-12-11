      // Add more stars to the sky
      const sky = document.querySelector(".sky");
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        sky.appendChild(star);
      }

      // Animate the moon
      const moon = document.querySelector(".moon");
      function animateMoon() {
        moon.style.transform = `translateX(-50%) translateY(${Math.sin(Date.now() * 0.001) * 30}px)`;
        requestAnimationFrame(animateMoon);
      }
      animateMoon();
    