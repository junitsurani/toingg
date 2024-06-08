import React from 'react';

const VideoSection = () => {
  return (
    // Main section container with flexbox layout and padding
    <section id="video" className="flex flex-col items-center justify-center p-8 my-[200px]">
      {/* Description text for the integrations section */}
      <p className="mb-4 text-center">Automate your agent with 5000+ integrations like</p>
      
      {/* Container for the logos of integrations */}
      <div className="flex flex-row items-center justify-between overflow-x-auto mb-10">
        {/* Individual logo containers with margin and grayscale filter */}
        <div className="flex-shrink-0 ml-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/dc4d/ef79/145ea370637c6bf835792e327738a0ee?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XDtDZSVLifHmEYtb8MfDnHIVA0HPIArcJFy19Q3~3V8nweD3Amb~OuxwcayTqbV7e47h98cHlKF~SH29ywM6czAriH~4yfjUu7PTC1ztlOEnp3NBHx~YTci~xj8tTSztSv70R~NcUXwTtrbLMJx4MXG3JHGf3Nfn8pOC0nQ8tPunFYa62e6IqSzID4silAX6PO9in3dOHmM4qW06aNtrQhNW6m290N0BVSF069~UppD3nrU~mNa-keJ46OENBPqjUylkEBIATGbzjztYDGenD-yffvyUkwFtdbBcrCdud7ZxDPd9Bu2aC1HrppAY4y3UkwwI-SCp5sIZdzba~MLVew__"
            height={38}
            width={44}
            className="grayscale"
          />
        </div>
        <div className="flex-shrink-0 ml-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/d93f/6540/d8ae3231c76594aef80a9c76a7dbb9b5?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RIlDxXVLIVUACqhbDKhjYwPlF-guSWVO7crlKRvlOFhZLpaGqYFQ6wM5MziUZYH-VgXPDzA8FPu2zYxmgHYjX9nL7sdS5KH7GgKAKncn1opSZzr7lAIshwWNcblqYFTQDm0mfhOSF3Svbe-4JZ11vlw~boMTcQzmdumnUzX~xqHzeS9-N2GOp7yht~mep9iY4S1JBCbSvWnWfeqz3n~uVq3CTL-pRZsaOE-ab7nLFJTyBc7Pv5eWnOroLuSdkKvJEhXFiDMm2FgJmPwT1nyuBLREV-B9CiyfipJ86OUuTnmNw3lIlZpUF3TOLQtyabMycVrlRC5ryaJsOy5J3BupQQ__"
            height={38}
            width={44}
            className="grayscale"
          />
        </div>
        <div className="flex-shrink-0 ml-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/2431/cd8e/c8dd5a406d93cd97d56af4cd9361753c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDfO589T7aotzp0Bqm2M~L7wTcQDulKFG02beXHvjvyW0fIDrQgltBiBzsJBS9risir7eK6QbyecnDvQL7ki6nVGaRJ-ng0~jNXpgmJ6GXfHsYHFmS1VI1mHnjAG19HdutlWlKZ0Qmk2tj-jeom-lQyZiDucPA0z82HMLVuTuscqby-9gSPz3GIms3FDYH36--1WmP3HaY1WFDiTUTIQIytvc8uZ8N0MTm1lf2QUuIa29zyuQflhZqagFPab5YJ5Iz~GwXUZ9kF-c7M56hGecI0nSp68nr3Fg~J3XiLvFI15hXmFSC80f9bmGMb6Pa-UzZ-5ZzxG3PrSz2PJBg9Qbw__"
            height={38}
            width={44}
            className="grayscale"
          />
        </div>
        <div className="flex-shrink-0 ml-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/48c5/6022/0ecfa467aed6ee32fd4ee04b5f598fc0?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TGm5ica-ruQgdF1BrYpf3qxBLpraeb9zCPNc7mhyGODHDeLSbIXx899D7o-E5ej1-DuVnK5O2HczNKFf7AVV1RPBwqhMpFfcinn0aKhdRXazUIU5mbWgXudcUg4ieFN8khFbIFeTo4zLJHLiuK~JI9yIJkgeM-UPj1lTuScfirkNCu66FqYU667QBUHAkMH7B84n~shJEPe0cRqQSNhPlwLL61eKlFjtmRJ81B8mv9YW8Wf7yceLdzPhlkkyYbB3kcxmGyRdrXQ~o9fBaIWZ8m3Fp3-FywyDrnqBNIIDQP1Rj2osKMH~wpfdwmNEUk3kEzNMNfLKdGddB5MXVkdoUg__"
            height={38}
            width={44}
            className="grayscale"
          />
        </div>
        <div className="flex-shrink-0 ml-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/0ca7/0b86/b503bd0b2dfd2739891f56562e6b7747?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EioQsYKdBGuDGns-leaKb1ynlAm5A4OUXipbTYkbIwJ0oi3iwJ2wMP1VYQqzJH8mY7vojBfsxqCkbwy0tMhb7-JdSHdXOSNGaGnexyhIAYHUKXZnOqt5aWwGEyrLVoj1nbj3MX2cXlnL7d2fcOZjG7ftQxmOcCAX6kKjb2i8-y--ZsUIUo~tuwF8UN~Ar47y6Kjj2QIS7pNJWpFXUS7Cj8MknNo~QY8twAlk2feAs~eQJekjTRa5pLYPIgmeamk2OovysFFEWk5~TtJvCeYcafYd46O6RvGN40~zk6FxcK4LbXJDCxYL9qt1GhVrBXqGxgUGViTprAjzQWE0XuKE9g__"
            height={38}
            width={44}
            className="grayscale"
          />
        </div>
      </div>

      {/* Container for the video */}
      <div className="relative w-full h-[500px] bg-black text-white flex items-center justify-center">
        {/* Embedded YouTube video */}
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/_La3wQlntgw"
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
