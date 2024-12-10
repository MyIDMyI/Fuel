Kakao.init("868ec8cdfb34ddf78e860c89de395674");

const mapContainer = document.getElementById('map'); 
// 맵 초기 화면
const mapOption = {
    center: new kakao.maps.LatLng(36.016, 127.9848), 
    level: 13 // 확대 레벨
};

// 지도 생성
const map = new kakao.maps.Map(mapContainer, mapOption);

// 시 데이터 ( center은 카카오 맵 api용, code 항목은 opinet open api에서 사용하는 코드 )
const siDoData = [
    { name: "서울 종로구", center: new kakao.maps.LatLng(37.57037778, 126.9816417), code: "0101" },
    { name: "서울 동대문구", center: new kakao.maps.LatLng(37.571625, 127.0421417), code: "0103" },
    { name: "서울 성북구", center: new kakao.maps.LatLng(37.58638333, 127.0203333), code: "0105" },
    { name: "서울 서대문구", center: new kakao.maps.LatLng(37.57636667, 126.9388972), code: "0107" },
    { name: "서울 마포구", center: new kakao.maps.LatLng(37.56070556, 126.9105306), code: "0109" },
    { name: "서울 영등포구", center: new kakao.maps.LatLng(37.52361111, 126.8983417), code: "0111" },
    { name: "서울 강남구", center: new kakao.maps.LatLng(37.514575, 127.0495556), code: "0113" },
    { name: "서울 강서구", center: new kakao.maps.LatLng(37.54815556, 126.851675), code: "0115" },
    { name: "서울 관악구", center: new kakao.maps.LatLng(37.47538611, 126.9538444), code: "0117" },
    { name: "서울 양천구", center: new kakao.maps.LatLng(37.51423056, 126.8687083), code: "0119" },
    { name: "서울 서초구", center: new kakao.maps.LatLng(37.48078611, 127.0348111), code: "0121" },
    { name: "서울 광진구", center: new kakao.maps.LatLng(37.53573889, 127.0845333), code: "0123" },
    { name: "서울 금천구", center: new kakao.maps.LatLng(37.44910833, 126.9041972), code: "0125" },
    { name: "부산 중구", center: new kakao.maps.LatLng(35.10321667, 129.0345083), code: "1001" },
    { name: "부산 동구", center: new kakao.maps.LatLng(35.13589444, 129.059175), code: "1003" },
    { name: "부산 부산진구", center: new kakao.maps.LatLng(35.15995278, 129.0553194), code: "1005" },
    { name: "부산 남구", center: new kakao.maps.LatLng(35.13340833, 129.0865), code: "1007" },
    { name: "부산 해운대구", center: new kakao.maps.LatLng(35.16001944, 129.1658083), code: "1009" },
    { name: "부산 강서구", center: new kakao.maps.LatLng(35.20916389, 128.9829083), code: "1011" },
    { name: "부산 연제구", center: new kakao.maps.LatLng(35.17318611, 129.082075), code: "1013" },
    { name: "부산 사상구", center: new kakao.maps.LatLng(35.14946667, 128.9933333), code: "1015" },
    { name: "부산 기장군", center: new kakao.maps.LatLng(35.24477541, 129.2222873), code: "1031" },
    { name: "대전 동구", center: new kakao.maps.LatLng(36.31204028, 127.4548596), code: "1701" },
    { name: "대전 중구", center: new kakao.maps.LatLng(36.32582989, 127.421381), code: "1702" },
    { name: "대전 서구", center: new kakao.maps.LatLng(36.35707299, 127.3834158), code: "1703" },
    { name: "대전 유성구", center: new kakao.maps.LatLng(36.36405586, 127.3561363), code: "1704" },
    { name: "대전 대덕구", center: new kakao.maps.LatLng(36.35218384, 127.4170933), code: "1705" },
    { name: "인천 중구", center: new kakao.maps.LatLng(37.47384843, 126.6217617), code: "1501" },
    { name: "인천 미추홀구", center: new kakao.maps.LatLng(37.46369169, 126.6502972), code: "1503" },
    { name: "인천 서구", center: new kakao.maps.LatLng(37.54546372, 126.6759616), code: "1505" },
    { name: "인천 연수구", center: new kakao.maps.LatLng(37.41038125, 126.6782658), code: "1507" },
    { name: "인천 강화군", center: new kakao.maps.LatLng(37.74692907, 126.4878417), code: "1531" },
    { name: "광주 동구", center: new kakao.maps.LatLng(35.14627776, 126.9230903), code: "1601" },
    { name: "광주 서구", center: new kakao.maps.LatLng(35.1525164, 126.8895063), code: "1602" },
    { name: "광주 북구", center: new kakao.maps.LatLng(35.1812138, 126.9010806), code: "1603" },
    { name: "광주 광산구", center: new kakao.maps.LatLng(35.13995836, 126.793668), code: "1604" },
    { name: "광주 남구", center: new kakao.maps.LatLng(35.13301749, 126.9025572), code: "1605" },
    { name: "대구 중구", center: new kakao.maps.LatLng(35.84621351, 128.597702), code: "1401" },
    { name: "대구 서구", center: new kakao.maps.LatLng(35.87194054, 128.5591601), code: "1403" },
    { name: "대구 북구", center: new kakao.maps.LatLng(35.8858646, 128.5828924), code: "1405" },
    { name: "대구 달서구", center: new kakao.maps.LatLng(35.82692778, 128.5350639), code: "1407" },
    { name: "대구 달성군", center: new kakao.maps.LatLng(35.77475029, 128.4313995), code: "1431" },
    { name: "울산 중구", center: new kakao.maps.LatLng(35.56971228, 129.3328162), code: "1801" },
    { name: "울산 남구", center: new kakao.maps.LatLng(35.54404265, 129.3301754), code: "1802" },
    { name: "울산 동구", center: new kakao.maps.LatLng(35.50516996, 129.4166919), code: "1803" },
    { name: "울산 북구", center: new kakao.maps.LatLng(35.58270783, 129.361245), code: "1804" },
    { name: "울산 울주군", center: new kakao.maps.LatLng(35.52230648, 129.2424748), code: "1831" },
    { name: "남원시", center: new kakao.maps.LatLng(35.416, 127.4151), code: "0604" },
    { name: "전주시", center: new kakao.maps.LatLng(35.823, 127.1484), code: "0601" },
    { name: "진주시", center: new kakao.maps.LatLng(35.178, 128.1098), code: "0904" },
    { name: "순천시", center: new kakao.maps.LatLng(34.950, 127.4879), code: "0704" },
    { name: "김천시", center: new kakao.maps.LatLng(36.139, 128.1134), code: "0803" },
    { name: "상주시", center: new kakao.maps.LatLng(36.411, 128.1592), code: "0809" },
    { name: "안동시", center: new kakao.maps.LatLng(36.568, 128.7295), code: "0806" },
    { name: "영주시", center: new kakao.maps.LatLng(36.804, 128.6244), code: "0804" },
    { name: "강릉시", center: new kakao.maps.LatLng(37.751, 128.8762), code: "0303" },
    { name: "속초시", center: new kakao.maps.LatLng(38.206, 128.5924), code: "0304" },
    { name: "원주시", center: new kakao.maps.LatLng(37.341, 127.9204), code: "0302" },
    { name: "충주시", center: new kakao.maps.LatLng(36.990, 127.9262), code: "0401" },
    { name: "이천시", center: new kakao.maps.LatLng(37.264, 127.4429), code: "0208" },
    { name: "춘천시", center: new kakao.maps.LatLng(37.860, 127.7468), code: "0301" },
    { name: "천안시", center: new kakao.maps.LatLng(36.818, 127.1182), code: "0502" },
    { name: "서산시", center: new kakao.maps.LatLng(36.780, 126.4586), code: "0506" },
    { name: "군산시", center: new kakao.maps.LatLng(35.967, 126.7054), code: "0602" },
    { name: "목포시", center: new kakao.maps.LatLng(34.810, 126.3942), code: "0702" },
    { name: "여수시", center: new kakao.maps.LatLng(34.759, 127.6633), code: "0703" },
    { name: "통영시", center: new kakao.maps.LatLng(34.849, 128.4057), code: "0906"},
    { name: "창원시", center: new kakao.maps.LatLng(35.212, 128.6179), code: "0902" },
    { name: "포항시", center: new kakao.maps.LatLng(36.019, 129.3441), code: "0801" },
    { name: "태백시", center: new kakao.maps.LatLng(37.163, 128.9864), code: "0306" },
    { name: "동해시", center: new kakao.maps.LatLng(37.524, 129.1146), code: "0305" },
    { name: "구미시", center: new kakao.maps.LatLng(36.119, 128.3557), code: "0807" },
    { name: "수원시", center: new kakao.maps.LatLng(37.254, 127.0311), code: "0201" },
    { name: "제주시", center: new kakao.maps.LatLng(33.494, 126.5572), code: "1101" },
    { name: "서귀포시", center: new kakao.maps.LatLng(33.253, 126.5104), lcode: "1102" }
];

// 시/도 마커 표시
siDoData.forEach(region => {
    const marker = new kakao.maps.Marker({
        position: region.center,
        title: region.name
    });

    marker.setMap(map);

    // 클릭 이벤트 등록
    kakao.maps.event.addListener(marker, 'click', () => {
        zoomToRegion(region);
        fetchFuelPrices(region.code);
    });
});

// 특정 지역으로 확대하는 함수
function zoomToRegion(region) {
    // 확대 레벨, 낮을수록 확대
    map.setLevel(9);
    map.setCenter(region.center);
}

// 유류 가격 데이터 요청 및 그래프 표시
async function fetchFuelPrices(regionCode) {
    let sidoCode, sigunCode;
    // opinet api 요청 파라미터인 sidoCode(2자리)는 필수 입력이지만 sigunCode(4자리)는 선택 입력
    // sigunCode = sidoCode + (하위 지역코드) 로 정의 되어있음
    // 따라서 위 siDoData에 각 지역에 sigunCode로 사용할 Code를 추가시킴(== 파라미터 regionCode)
    sigunCode = regionCode;
    sidoCode = regionCode.slice(0, 2);

    try {
        // 시도 유류 평균 가격
        const response1 = await fetch(`json/${sidoCode}.json`); 
        const SIGUN_data = await response1.json();
        // 전국 유류 평균 가격
        const response2 = await fetch(`json/all.json`);
        const ALL_data = await response2.json();

        const filteredOils = SIGUN_data.RESULT.OIL.filter(oil => oil.SIGUNCD === sigunCode);
        if (SIGUN_data.RESULT && ALL_data.RESULT) {
            renderChart(sigunCode, filteredOils, ALL_data.RESULT);
        }
    } catch (error) {
        console.error('Error fetching the JSON file:', error); 
    }
}

// Chart.js를 이용한 그래프 생성
function renderChart(sigunCode, oils, ALL_data) {
    const chartContainer = document.getElementById('chart-container');
    chartContainer.innerHTML = '<canvas id="chart"></canvas>'; 
    const ctx = document.getElementById('chart').getContext('2d');

    const productCodes = {
        B027: "보통휘발유",
        B034: "고급휘발유",
        D047: "자동차경유",
        C004: "실내등유",
        K015: "자동차부탄",
    };

    // 데이터를 객체로 변환
    const dataMap = {};
    oils.forEach((oil) => {
        const prodCode = oil.PRODCD; 
        const price = parseFloat(oil.PRICE);
        dataMap[prodCode] = price;  // PRODCD를 키로 사용하여 가격을 매핑
    });

    // 전국 평균 가격 데이터 처리
    const nationalPrices = ALL_data.OIL.reduce((acc, oil) => {
        acc[oil.PRODCD] = parseFloat(oil.PRICE);
        return acc;
    }, {});

    // 차트 데이터를 준비
    const chartData = Object.keys(productCodes).map((prodCode) => ({
        label: productCodes[prodCode],
        price: dataMap[prodCode] || 0,
        nationalPrice: nationalPrices[prodCode] || 0, // 누락된 값은 0
    }));

    new Chart(ctx, {
        type: 'bar',
        data: {
            // B034:고급휘발유, B027:보통휘발유, D047:자동차경유, C004:실내등유, K015:자동차부탄
            labels: chartData.map((item) => item.label),
            datasets: [
                {
                    label: `${siDoData.find(item => item.code === sigunCode).name} 평균 가격`,
                    data: chartData.map((item) => item.price),
                    backgroundColor: ['#FF6384'],
                    barPercentage: 0.4,
                },
                {
                    label: '전국 평균 가격',
                    data: chartData.map((item) => item.nationalPrice),
                    backgroundColor: ['#FFA07A'],
                    barPercentage: 0.4,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: `${siDoData.find(item => item.code === sigunCode).name} 평균 유류 가격 (기준일: ${ALL_data.OIL[0].TRADE_DT})`, // 기준 날짜 추가
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                y: {
                    min : 500,
                    ticks: {
                        // y축 눈금 값 포맷
                        callback: function(value) {
                            return value + '원';  // 예시로 '원' 단위 추가
                        }
                    }
                }
            }
        }
    });
}
