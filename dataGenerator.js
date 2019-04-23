const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');
const faker = require('faker');

let trailerLinks = [
'https://www.youtube.com/watch?v=Rp8WL621uGM',
'https://www.youtube.com/watch?v=WKWFr9upIuU&t=15s',
'https://www.youtube.com/watch?v=XKB5h2tJQHQ',
'https://www.youtube.com/watch?v=ZVANQheoRUw',
'https://www.youtube.com/watch?v=OTd_D7QC8jM&t=17s',
'https://www.youtube.com/watch?v=WMdBs7uTLHw',
'https://www.youtube.com/watch?v=adzYW5DZoWs',
'https://www.youtube.com/watch?v=DltrMStqr8Q',
'https://www.youtube.com/watch?v=qeau7UWjEms',
'https://www.youtube.com/watch?v=xRc3WviXk2M',
'https://www.youtube.com/watch?v=Z6yTXsCauIc',
'https://www.youtube.com/watch?v=AD10dDdEGmU',
'https://www.youtube.com/watch?v=mEUsRi74lcY',
'https://www.youtube.com/watch?v=LiwFtzuSnkE',
'https://www.youtube.com/watch?v=dFGYK-iRMgw',
'https://www.youtube.com/watch?v=Hld-7oBn3Rk',
'https://www.youtube.com/watch?v=6IO8mjyWbhA',
'https://www.youtube.com/watch?v=i2Ozn_ox_4A',
'https://www.youtube.com/watch?v=B12REtkl2KY',
'https://www.youtube.com/watch?v=pU8-7BX9uxs',
'https://www.youtube.com/watch?v=r6p2yUTbNlc',
'https://www.youtube.com/watch?v=ZADZv0Fu8rM',
'https://www.youtube.com/watch?v=raGuAtgC9C0',
'https://www.youtube.com/watch?v=r6p2yUTbNlc',
'https://www.youtube.com/watch?v=cr4Pj7NCwgg',
'https://www.youtube.com/watch?v=tKwhs5u9z8c',
'https://www.youtube.com/watch?v=mBBuzHrZBro',
'https://www.youtube.com/watch?v=uilJZZ_iVwY',
'https://www.youtube.com/watch?v=6tkw2g--cvE',
'https://www.youtube.com/watch?v=DYYtuKyMtY8',
'https://www.youtube.com/watch?v=HpzzrqJi6ko',
'https://www.youtube.com/watch?v=ZsBO4b3tyZg',
'https://www.youtube.com/watch?v=2QFBZgAZx7g',
'https://www.youtube.com/watch?v=6NqKrhmnVNY',
'https://www.youtube.com/watch?v=DoJ_FTUirzE',
'https://www.youtube.com/watch?v=Y-ufZuqTd5c',
'https://www.youtube.com/watch?v=8dxh3lwdOFw',
'https://www.youtube.com/watch?v=j1Fda82oxcc',
'https://www.youtube.com/watch?v=oc3sPICXZLs',
'https://www.youtube.com/watch?v=1GU-D64mVe8',
'https://www.youtube.com/watch?v=MkfMSAq09xk',
'https://www.youtube.com/watch?v=KFroCRDXw5E',
'https://www.youtube.com/watch?v=8piqd2BWeGI',
'https://www.youtube.com/watch?v=7WAzFWu2tVw',
'https://www.youtube.com/watch?v=oK5hMNxqsFA',
'https://www.youtube.com/watch?v=rJsAVoKlbLk',
'https://www.youtube.com/watch?v=sLgCCdLbQNc',
'https://www.youtube.com/watch?v=Q2c5-L5qBvM',
'https://www.youtube.com/watch?v=WB-w3130-C4',
'https://www.youtube.com/watch?v=JlcX_GXtf40',
'https://www.youtube.com/watch?v=5Atg2aASyY4',
'https://www.youtube.com/watch?v=TExoc0MG4I4',
'https://www.youtube.com/watch?v=CwXOrWvPBPk',
'https://www.youtube.com/watch?v=xBgSfhp5Fxo',
'https://www.youtube.com/watch?v=AcHasH-nLhU',
'https://www.youtube.com/watch?v=c2djQYc9B_c',
'https://www.youtube.com/watch?v=XHhAG-YLdk8',
'https://www.youtube.com/watch?v=dlnmQbPGuls',
'https://www.youtube.com/watch?v=6hDkhw5Wkas',
'https://www.youtube.com/watch?v=47ceXAEr2Oo',
'https://www.youtube.com/watch?v=vOdYAXOfLMc',
'https://www.youtube.com/watch?v=1x0GpEZnwa8',
'https://www.youtube.com/watch?v=tF_v4ZZkQWE',
'https://www.youtube.com/watch?v=lhAilpSsL4k',
'https://www.youtube.com/watch?v=p4vIFhk621Q',
'https://www.youtube.com/watch?v=yByhd7FAOug',
'https://www.youtube.com/watch?v=YP6s4xoufzg',
'https://www.youtube.com/watch?v=L-_xHEv0l-w',
'https://www.youtube.com/watch?v=yzQYokimcg0',
'https://www.youtube.com/watch?v=AGH5w7cXGl8',
'https://www.youtube.com/watch?v=RbtoIP14EdY',
'https://www.youtube.com/watch?v=0iqZD-oTE7U',
'https://www.youtube.com/watch?v=DMOBlEcRuw8',
'https://www.youtube.com/watch?v=EKTZZTZ-IpA',
'https://www.youtube.com/watch?v=pYrrEUgnT6s',
'https://www.youtube.com/watch?v=SgstaR60zNk',
'https://www.youtube.com/watch?v=Xm12NSa8jsM',
'https://www.youtube.com/watch?v=sp2kKzrCm44',
'https://www.youtube.com/watch?v=v1dv-skGIYY',
'https://www.youtube.com/watch?v=ozFwfBtZSzU',
'https://www.youtube.com/watch?v=xI0g1gaXr-Y',
'https://www.youtube.com/watch?v=5aoGFs05NfY',
'https://www.youtube.com/watch?v=cKPNums7NUo',
'https://www.youtube.com/watch?v=wMisPK94nPk',
'https://www.youtube.com/watch?v=7S4QxM7Y2oI',
'https://www.youtube.com/watch?v=KmAyPUv9gOY',
'https://www.youtube.com/watch?v=qw--VYLpxG4',
'https://www.youtube.com/watch?v=2oAS7MtMwqA',
'https://www.youtube.com/watch?v=7S_tz1z_5bA',
'https://www.youtube.com/watch?v=D35llNtkCps',
'https://www.youtube.com/watch?v=tMQKRwTdr_U&t=2705s',
'https://www.youtube.com/watch?v=xMGe_tRRZsc',
'https://www.youtube.com/watch?v=RvTtUWTR9_o',
'https://www.youtube.com/watch?v=iYefzP2Q0YE',
'https://www.youtube.com/watch?v=de5ZxQKVK7k',
'https://www.youtube.com/watch?v=7Jj83FOlBF8',
'https://www.youtube.com/watch?v=r8RxkpUvxK0&t=3251s',
'https://www.youtube.com/watch?v=5-qRjDM3SMg',
'https://www.youtube.com/watch?v=Z5RJUaFIKvE'
];

let getAssociatedVideoTitle = function() {
  return faker.lorem.words(2);
};

let getAssociatedVideoLink = function() {
  return trailerLinks[Math.floor(Math.random() * trailerLinks.length)];
};

let makeData = function() {
  console.time('timing data generation');
  writer.pipe(fs.createWriteStream('movieData.csv'));
  for (let i = 0; i < 10000000; i++) {
    let name = faker.lorem.words(2);
    let associatedVideoTitle1 = getAssociatedVideoTitle();
    let associatedVideoLink1 = getAssociatedVideoLink();
    let associatedVideoTitle2 = getAssociatedVideoTitle();
    let associatedVideoLink2 = getAssociatedVideoLink();
    let associatedVideoTitle3 = getAssociatedVideoTitle();
    let associatedVideoLink3 = getAssociatedVideoLink();
    let associatedVideoTitle4 = getAssociatedVideoTitle();
    let associatedVideoLink4 = getAssociatedVideoLink();
    let associatedVideoTitle5 = getAssociatedVideoTitle();
    let associatedVideoLink5 = getAssociatedVideoLink();

    writer.write({
      name,
      associatedVideoTitle1,
      associatedVideoLink1,
      associatedVideoTitle2,
      associatedVideoLink2,
      associatedVideoTitle3,
      associatedVideoLink3,
      associatedVideoTitle4,
      associatedVideoLink4,
      associatedVideoTitle5,
      associatedVideoLink5
    });
  }
  writer.end();
  console.log('movie data saved');
  console.timeEnd('timing data generation');
};

makeData();
