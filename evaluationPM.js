const confirmButton = document.querySelector('.confirm');
const indicatorInput = document.querySelectorAll('.indicator--input');
const indicatorInputs = document.querySelectorAll('.indicator-inputs');

const strategyContainer = document.getElementById('strategy');

console.log(strategyContainer.children);

const checkedArr = [];
let encryptedArr;
const averageS = [],
  averageC = [],
  averageK = [],
  averageL = [],
  averageE = [],
  averageR = [],
  averageD = [],
  averageP = [],
  averageI = [],
  averageF = [];
let tracker = 0;
let redirectFlag = false;
redirect = 'password123';

let totalS = 0,
  totalC = 0,
  totalK = 0,
  totalL = 0,
  totalE = 0,
  totalR = 0,
  totalD = 0,
  totalP = 0,
  totalI = 0,
  totalF = 0;
let avgS, avgC, avgK, avgL, avgE, avgR, avgD, avgP, avgI, avgF;
let encryptedS,
  encryptedC,
  encryptedK,
  encryptedL,
  encryptedE,
  encryptedR,
  encryptedD,
  encryptedP,
  encryptedI,
  encryptedF;
let stringAvgS,
  stringAvgC,
  stringAvgK,
  stringAvgL,
  stringAvgE,
  stringAvgR,
  stringAvgD,
  stringAvgP,
  stringAvgI,
  stringAvgF;

function calcAverage() {
  for (let i = 0; i < averageS.length; i++) {
    totalS += Number(averageS[i]);
  }
  avgS = totalS / averageS.length;
  console.log(avgS);
  stringAvgS = avgS.toString();
  encryptedS = CryptoJS.AES.encrypt(stringAvgS, redirect);

  for (let i = 0; i < averageC.length; i++) {
    totalC += Number(averageC[i]);
  }
  avgC = totalC / averageC.length;
  stringAvgC = avgC.toString();
  encryptedC = CryptoJS.AES.encrypt(stringAvgC, redirect);

  for (let i = 0; i < averageK.length; i++) {
    totalK += Number(averageK[i]);
  }
  avgK = totalK / averageK.length;
  stringAvgK = avgK.toString();
  encryptedK = CryptoJS.AES.encrypt(stringAvgK, redirect);

  for (let i = 0; i < averageL.length; i++) {
    totalL += Number(averageL[i]);
  }
  avgL = totalL / averageL.length;
  stringAvgL = avgL.toString();
  encryptedL = CryptoJS.AES.encrypt(stringAvgL, redirect);

  for (let i = 0; i < averageE.length; i++) {
    totalE += Number(averageE[i]);
  }
  avgE = totalE / averageE.length;
  stringAvgE = avgE.toString();
  encryptedE = CryptoJS.AES.encrypt(stringAvgE, redirect);

  for (let i = 0; i < averageR.length; i++) {
    totalR += Number(averageR[i]);
  }
  avgR = totalR / averageR.length;
  stringAvgR = avgR.toString();
  encryptedR = CryptoJS.AES.encrypt(stringAvgR, redirect);

  for (let i = 0; i < averageD.length; i++) {
    totalD += Number(averageD[i]);
  }
  avgD = totalD / averageD.length;
  stringAvgD = avgD.toString();
  encryptedD = CryptoJS.AES.encrypt(stringAvgD, redirect);

  for (let i = 0; i < averageP.length; i++) {
    totalP += Number(averageP[i]);
  }
  avgP = totalP / averageP.length;
  stringAvgP = avgP.toString();
  encryptedP = CryptoJS.AES.encrypt(stringAvgP, redirect);

  for (let i = 0; i < averageI.length; i++) {
    totalI += Number(averageI[i]);
  }
  avgI = totalI / averageI.length;
  stringAvgI = avgI.toString();
  encryptedI = CryptoJS.AES.encrypt(stringAvgI, redirect);

  for (let i = 0; i < averageF.length; i++) {
    totalF += Number(averageF[i]);
  }
  avgF = totalF / averageF.length;
  stringAvgF = avgF.toString();
  encryptedF = CryptoJS.AES.encrypt(stringAvgF, redirect);
}

function convertInput() {
  encryptedArr = checkedArr.map(el => {
    let stringEl = el.toString();
    let encryptedEl = CryptoJS.AES.encrypt(stringEl, redirect);
    return encryptedEl;
  });
}

confirmButton.addEventListener('click', () => {
  ifChecked();

  if (tracker < 43) {
    tracker = 0;

    swal({
      title: 'Qiymətləndirmədiyiniz sətir var!',
      text: 'Xahiş edirik hər bir sətiri doldurun...',
      icon: 'error',
      button: true,
    });
  } else {
    indicatorInputs.forEach((el, index) => {
      const childrenArr = [...el.children];
      childrenArr.forEach((elem, idx) => {
        if (elem.checked) {
          checkedArr.push(elem.value);
          if (
            elem.name === 'indicator--1' ||
            elem.name === 'indicator--2' ||
            elem.name === 'indicator--3' ||
            elem.name === 'indicator--4'
          ) {
            averageS.push(elem.value);
          } else if (
            elem.name === 'indicator--5' ||
            elem.name === 'indicator--6' ||
            elem.name === 'indicator--7' ||
            elem.name === 'indicator--8'
          ) {
            averageC.push(elem.value);
          } else if (
            elem.name === 'indicator--9' ||
            elem.name === 'indicator--10' ||
            elem.name === 'indicator--11' ||
            elem.name === 'indicator--12' ||
            elem.name === 'indicator--13'
          ) {
            averageK.push(elem.value);
          } else if (
            elem.name === 'indicator--14' ||
            elem.name === 'indicator--15' ||
            elem.name === 'indicator--16' ||
            elem.name === 'indicator--17'
          ) {
            averageL.push(elem.value);
          } else if (
            elem.name === 'indicator--18' ||
            elem.name === 'indicator--19' ||
            elem.name === 'indicator--20' ||
            elem.name === 'indicator--21' ||
            elem.name === 'indicator--22'
          ) {
            averageE.push(elem.value);
          } else if (
            elem.name === 'indicator--23' ||
            elem.name === 'indicator--24' ||
            elem.name === 'indicator--25'
          ) {
            averageR.push(elem.value);
          } else if (
            elem.name === 'indicator--26' ||
            elem.name === 'indicator--27' ||
            elem.name === 'indicator--28' ||
            elem.name === 'indicator--29' ||
            elem.name === 'indicator--30'
          ) {
            averageD.push(elem.value);
          } else if (
            elem.name === 'indicator--31' ||
            elem.name === 'indicator--32' ||
            elem.name === 'indicator--33' ||
            elem.name === 'indicator--34'
          ) {
            averageP.push(elem.value);
          } else if (
            elem.name === 'indicator--35' ||
            elem.name === 'indicator--36' ||
            elem.name === 'indicator--37' ||
            elem.name === 'indicator--38' ||
            elem.name === 'indicator--39'
          ) {
            averageI.push(elem.value);
          } else {
            averageF.push(elem.value);
          }
        } else {
          //   console.log('say');
        }
        // console.log(elem);
      });
    });

    swal({
      title: 'Təsdiq etməyə əminsiniz?',
      text: 'Təsdiqlədikdən sonra yenidən qiymətləndirmə şansınız olmayacaq!',
      icon: 'warning',
      buttons: ['Cancel', 'Bəli!'],
      confirmButtonColor: '#00A8E8',
    })
      .then(willDelete => {
        if (willDelete) {
          swal('Təsdiq olundu!', {
            icon: 'success',
            buttons: false,
          });
          confirmButton.disabled = false;
          calcAverage();
          convertInput();
          submitNow();

          redirectFlag = true;

          return redirectFlag;
        }
      })
      .then(value => {
        if (value === true) {
          setTimeout(() => {
            window.location.href =
              'http://192.168.14.51/otcs/llisapi.dll?func=llworkspace';
            // console.log('Halo');
          }, 2500);
        }
      });
  }
});
