import axios from "axios";

// Aşağıdaki Fonksiyonu değiştirmeyin

export async function ipAdresimiAl() {
  return await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  }).then(function (response) {
    return response.data;
  });
}

/*

	ADIM 1: Aşağdıdaki getData() fonskiyonunda axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız:
  https://apis.ergineer.com/ipgeoapi/{ipAdresiniz}

  Fonksiyon gelen data'yı(obje) geri dönmeli
	
	NOT: ipAdresinizi ipAdresimiAl fonksiyonu ile alabilirsiniz.

  NOT2: gelen datayı browser'da network tab'ından inceleyin. 
  (network tab'ından inceleyemezseniz get isteklerinin URL'ini browser'dan açıp da kontrol edebilirsiniz. 😉)

  Bu data Adım 2'de oluşturacağınız component'de argüman olarak kullanılıyor, önden içindeki verilere(key-Value ikililerine) bakmanız iyi olur).
*/

export async function getData() {
  const ip = await ipAdresimiAl();
  const response = await axios
    .get(`https://apis.ergineer.com/ipgeoapi/${ip}`)
    .then((response) => {
      return response.data;
    });
  return response;
}

/*
	ADIM 2: Aşağıdaki cardOlustur fonskiyonunu argüman olarak sadece 1 nesne alacak şekilde tanımlayın.

  Bu fonksiyonda DOM metotlarını ve özelliklerini kullanarak, aşağıdaki element'i oluşturup dönün.

  Not: Ülke Bayrağını bu linkten alabilirsiniz:
  'https://flaglog.com/codes/standardized-rectangle-120px/{ülkeKodu}.png';
	
	<div class="card">
    <img src={ülke bayrağı url} />
    <div class="card-info">
      <h3 class="ip">{ip adresi}</h3>
      <p class="ulke">{ülke bilgisi (ülke kodu)}</p>
      <p>Enlem: {enlem} Boylam: {boylam}</p>
      <p>Şehir: {şehir}</p>
      <p>Saat dilimi: {saat dilimi}</p>
      <p>Para birimi: {para birimi}</p>
      <p>ISP: {isp}</p>
    </div>
  </div>
*/

export function cardOlustur(item) {
  console.log(item);
  const card = document.createElement("div");
  card.classList.add("card");
  const image = document.createElement("img");
  image.src = `https://flaglog.com/codes/standardized-rectangle-120px/TR.png`;
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  const h3 = document.createElement("h3");
  h3.classList.add("ip");
  h3.textContent = item.sorgu;
  const p1 = document.createElement("p");
  p1.classList.add("ulke");
  p1.textContent = `${item.ülke} (${item.ülkeKodu})`;
  const p2 = document.createElement("p");
  p2.textContent = `Enlem: ${item.enlem} Boylam:${item.boylam}`;
  const p3 = document.createElement("p");
  p3.textContent = `Şehir: ${item.şehir}`;
  const p4 = document.createElement("p");
  p4.textContent = `Saat dilimi: ${item.saatdilimi}`;
  const p5 = document.createElement("p");
  p5.textContent = `Para birimi: ${item.parabirimi}`;
  const p6 = document.createElement("p");
  p6.textContent = `ISP: ${item.isp}`;
  cardInfo.append(h3, p1, p2, p3, p4, p5, p6);
  card.append(image, cardInfo);
  return card;
}
