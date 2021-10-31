setTimeout(() => {
  document.querySelector(".container").innerHTML = "<h1>10</h1>";
  setTimeout(() => {
    document.querySelector(".container").innerHTML = "<h1>9</h1>";
    setTimeout(() => {
      document.querySelector(".container").innerHTML = "<h1>8</h1>";
      setTimeout(() => {
        document.querySelector(".container").innerHTML = "<h1>7</h1>";
        setTimeout(() => {
          document.querySelector(".container").innerHTML = "<h1>6</h1>";
          setTimeout(() => {
            document.querySelector(".container").innerHTML = "<h1>5</h1>";
            setTimeout(() => {
              document.querySelector(".container").innerHTML = "<h1>4</h1>";
              setTimeout(() => {
                document.querySelector(".container").innerHTML = "<h1>3</h1>";
                setTimeout(() => {
                  document.querySelector(".container").innerHTML = "<h1>2</h1>";
                  setTimeout(() => {
                    document.querySelector(".container").innerHTML =
                      "<h1>1</h1>";
                    setTimeout(() => {
                      document.querySelector(".container").innerHTML = `<h2>
                                              <span class="saf">Happy</span>
                                              <span class="green">Diwali</span>
                                          </h2>`;
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
