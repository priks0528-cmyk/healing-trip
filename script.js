let selectedTrip = "";
let selectedCategory = "";


/* =========================
   화면 이동
========================= */

function goToScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target =
        document.getElementById(screenId);

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   너랑 안가
========================= */

function showNope() {

    goToScreen("nope-screen");
}


/* =========================
   여행 데이터
========================= */

const trips = {

    fukuoka: {

        category: "japan",

        title: "후쿠오카",

        icon: "🐰",

        subtitle:
            "치이카와 + 맛있는 거 + 짧고 여유롭게",

        description:
            "치이카와 굿즈 · 맛집 · 여유",

        day1: [
            "✈️ 아침 비행기로 일본 출발",
            "🍜 후쿠오카 도착 후 맛있는 점심",
            "🛍️ 텐진에서 치이카와 굿즈 쇼핑",
            "☕ 주변 구경하고 카페에서 쉬기",
            "🍲 모츠나베 / 야키니쿠 맛있는 저녁",
            "🌙 야타이나 밤거리 구경",
            "🛏️ 숙소에서 푹 쉬기"
        ],

        day2: [
            "☀️ 느긋하게 일어나기",
            "🍣 맛있는 아침 또는 점심",
            "🛍️ 하카타 · 텐진 못 본 곳 구경",
            "🎁 마지막 쇼핑",
            "✈️ 한국으로 돌아오기"
        ]
    },


    osaka: {

        category: "japan",

        title: "오사카",

        icon: "🛍️",

        subtitle:
            "치이카와도 털고 먹고 놀고 쇼핑까지",

        description:
            "치이카와 · 쇼핑 · 먹방",

        day1: [
            "✈️ 아침 비행기로 오사카 출발",
            "🍽️ 도착 후 맛있는 점심",
            "🛍️ 신사이바시 치이카와 굿즈 쇼핑",
            "🚶 신사이바시 · 난바 구경",
            "🐙 타코야키 / 오코노미야키 먹기",
            "🌃 도톤보리 구경",
            "🛏️ 숙소에서 휴식"
        ],

        day2: [
            "☀️ 아침부터 우메다 이동",
            "🛍️ 치이카와 굿즈 한 번 더!",
            "🍖 오사카 마지막 맛집",
            "🛒 쇼핑 조금 더 하기",
            "✈️ 한국으로 돌아오기"
        ]
    },


    busan: {

        category: "korea",

        title: "부산 호캉스",

        icon: "🌊",

        subtitle:
            "아무것도 안 하고 제대로 쉬는 여행",

        description:
            "호캉스 · 바다 · 휴식",

        day1: [
            "🚄 느긋하게 부산으로 출발",
            "🍽️ 부산 도착 후 맛있는 점심",
            "🏨 좋은 호텔 체크인",
            "🏊 수영장 · 사우나 · 호텔 즐기기",
            "🌊 해운대 또는 광안리 산책",
            "🥩 맛있는 저녁",
            "🍿 호텔에서 야식 먹으며 뒹굴기"
        ],

        day2: [
            "😴 늦잠 자기",
            "🥐 호텔 조식",
            "🛏️ 체크아웃 전까지 푹 쉬기",
            "☕ 바다 보이는 카페",
            "🍽️ 부산 마지막 맛집",
            "🚄 집으로 돌아오기"
        ]
    },


    gangneung: {

        category: "korea",

        title: "강릉",

        icon: "☕",

        subtitle:
            "바다 보고 카페 가고 천천히",

        description:
            "바다 · 카페 · 감성",

        day1: [
            "🚗 강릉으로 출발",
            "🍽️ 도착해서 맛있는 점심",
            "🌊 바다 보러 가기",
            "☕ 오션뷰 카페에서 쉬기",
            "🏡 감성 숙소 체크인",
            "🌅 해변 산책",
            "🍖 맛있는 저녁"
        ],

        day2: [
            "☀️ 천천히 일어나기",
            "🥞 브런치 먹기",
            "🌊 다른 바다 구경",
            "☕ 카페 한 곳 더",
            "📸 사진 찍고 천천히 놀기",
            "🚗 집으로 돌아오기"
        ]
    },


    gyeongju: {

        category: "korea",

        title: "경주",

        icon: "🌙",

        subtitle:
            "조용한 곳에서 둘이 걷고 쉬는 여행",

        description:
            "야경 · 산책 · 감성",

        day1: [
            "🚄 경주로 출발",
            "🍽️ 도착 후 맛있는 점심",
            "🚶 황리단길 천천히 구경",
            "☕ 예쁜 카페에서 쉬기",
            "🏡 감성 숙소 체크인",
            "🍚 맛있는 저녁",
            "🌙 월정교 · 동궁과 월지 야경 산책"
        ],

        day2: [
            "☀️ 느긋하게 일어나기",
            "🥞 브런치 먹기",
            "🌿 경주 산책 또는 관광 한 곳",
            "☕ 카페에서 쉬기",
            "📸 우리 사진 남기기",
            "🚄 집으로 돌아오기"
        ]
    }

};


/* =========================
   여행 선택
========================= */

function selectTrip(tripName) {

    selectedTrip = tripName;

    const trip =
        trips[tripName];

    selectedCategory =
        trip.category;


    document.getElementById(
        "result-icon"
    ).textContent =
        trip.icon;


    document.getElementById(
        "trip-title"
    ).textContent =
        trip.title;


    document.getElementById(
        "trip-subtitle"
    ).textContent =
        trip.subtitle;


    createSchedule(
        "day1",
        trip.day1
    );


    createSchedule(
        "day2",
        trip.day2
    );


    goToScreen(
        "schedule-screen"
    );
}


/* =========================
   일정 출력
========================= */

function createSchedule(
    elementId,
    schedule
) {

    const container =
        document.getElementById(
            elementId
        );

    container.innerHTML = "";


    schedule.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "schedule-item";

        div.textContent =
            item;

        container.appendChild(div);

    });

}


/* =========================
   이전 여행 목록
========================= */

function backToTravelChoice() {

    if (
        selectedCategory === "japan"
    ) {

        goToScreen(
            "japan-choice"
        );

    } else {

        goToScreen(
            "korea-choice"
        );

    }

}


/* =========================
   최종 선택
========================= */

function goToFinal() {

    const trip =
        trips[selectedTrip];


    document.getElementById(
        "final-icon"
    ).textContent =
        trip.icon;


    document.getElementById(
        "final-title"
    ).textContent =
        trip.title;


    document.getElementById(
        "final-description"
    ).textContent =
        trip.description;


    goToScreen(
        "final-screen"
    );
}


/* =========================
   처음부터
========================= */

function restart() {

    selectedTrip = "";
    selectedCategory = "";

    goToScreen("intro");
}