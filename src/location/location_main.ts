
interface ILocation{
    name: string;
    children?: ILocation[];
}
const cities: ILocation[] = [
    {
        name: "서울",
        children: [
            {
                name: "강남구",
                children: [
                    { name: "신사동" },
                    { name: "논현동" },
                    { name: "압구정동" },
                    { name: "청담동" },
                    { name: "삼성동" },
                    { name: "대치동" },
                    { name: "역삼동" },
                    { name: "도곡동" },
                    { name: "개포동" },
                    { name: "일원동" },
                    { name: "수서동" },
                    { name: "세곡동" }
                ]
            },
            {
                name: "송파구",
                children: [
                    { name: "잠실동" },
                    { name: "가락동" },
                    { name: "문정동" },
                    { name: "장지동" },
                    { name: "거여동" },
                    { name: "마천동" },
                    { name: "풍납동" },
                    { name: "송파동" },
                    { name: "석촌동" },
                    { name: "삼전동" },
                    { name: "오금동" },
                    { name: "방이동" }
                ]
            },
            {
                name: "강서구",
                children: [
                    { name: "염창동" },
                    { name: "등촌동" },
                    { name: "화곡동" },
                    { name: "우장산동" },
                    { name: "발산동" },
                    { name: "가양동" },
                    { name: "공항동" },
                    { name: "방화동" },
                    { name: "마곡동" }
                ]
            },
            {
                name: "마포구",
                children: [
                    { name: "공덕동" },
                    { name: "아현동" },
                    { name: "도화동" },
                    { name: "용강동" },
                    { name: "토정동" },
                    { name: "염리동" },
                    { name: "신수동" },
                    { name: "현석동" },
                    { name: "신공덕동" },
                    { name: "노고산동" },
                    { name: "서교동" },
                    { name: "동교동" },
                    { name: "상수동" }
                ]
            },
            {
                name: "중구",
                children: [
                    { name: "신당동" },
                    { name: "황학동" },
                    { name: "중림동" },
                    { name: "회현동" },
                    { name: "필동" },
                    { name: "남산동" },
                    { name: "명동" },
                    { name: "을지로동" },
                    { name: "광희동" },
                    { name: "소공동" }
                ]
            },
            {
                name: "종로구",
                children: [
                    { name: "사직동" },
                    { name: "삼청동" },
                    { name: "부암동" },
                    { name: "평창동" },
                    { name: "무악동" },
                    { name: "교남동" },
                    { name: "가회동" },
                    { name: "종로동" },
                    { name: "청운동" }
                ]
            },
            {
                name: "용산구",
                children: [
                    { name: "한강로동" },
                    { name: "이촌동" },
                    { name: "원효로동" },
                    { name: "남영동" },
                    { name: "청파동" },
                    { name: "효창동" },
                    { name: "한남동" },
                    { name: "동빙고동" },
                    { name: "이태원동" }
                ]
            },
            {
                name: "서초구",
                children: [
                    { name: "반포동" },
                    { name: "잠원동" },
                    { name: "방배동" },
                    { name: "양재동" },
                    { name: "우면동" },
                    { name: "내곡동" }
                ]
            },
            {
                name: "은평구",
                children: [
                    { name: "녹번동" },
                    { name: "불광동" },
                    { name: "갈현동" },
                    { name: "구산동" },
                    { name: "대조동" },
                    { name: "응암동" },
                    { name: "역촌동" },
                    { name: "신사동" },
                    { name: "증산동" },
                    { name: "수색동" },
                    { name: "진관동" }
                ]
            },
            {
                name: "성동구",
                children: [
                    { name: "성수동" },
                    { name: "행당동" },
                    { name: "금호동" },
                    { name: "옥수동" },
                    { name: "왕십리동" },
                    { name: "마장동" },
                    { name: "사근동" },
                    { name: "송정동" },
                    { name: "용답동" }
                ]
            },
            {
                name: "성북구",
                children: [
                    { name: "돈암동" },
                    { name: "동소문동" },
                    { name: "삼선동" },
                    { name: "성북동" },
                    { name: "정릉동" },
                    { name: "길음동" },
                    { name: "종암동" },
                    { name: "장위동" },
                    { name: "석관동" }
                ]
            },
            {
                name: "동대문구",
                children: [
                    { name: "용두동" },
                    { name: "제기동" },
                    { name: "전농동" },
                    { name: "답십리동" },
                    { name: "장안동" },
                    { name: "청량리동" },
                    { name: "휘경동" },
                    { name: "이문동" }
                ]
            },
            {
                name: "영등포구",
                children: [
                    { name: "영등포동" },
                    { name: "여의도동" },
                    { name: "당산동" },
                    { name: "도림동" },
                    { name: "문래동" },
                    { name: "양평동" },
                    { name: "신길동" },
                    { name: "대림동" }
                ]
            },
            {
                name: "광진구",
                children: [
                    { name: "중곡동" },
                    { name: "능동" },
                    { name: "구의동" },
                    { name: "광장동" },
                    { name: "자양동" },
                    { name: "화양동" },
                    { name: "군자동" }
                ]
            },
            {
                name: "양천구",
                children: [
                    { name: "목동" },
                    { name: "신정동" },
                    { name: "신월동" }
                ]
            },
            {
                name: "동작구",
                children: [
                    { name: "노량진동" },
                    { name: "상도동" },
                    { name: "흑석동" },
                    { name: "사당동" },
                    { name: "대방동" },
                    { name: "신대방동" }
                ]
            },
            {
                name: "강북구",
                children: [
                    { name: "수유동" },
                    { name: "미아동" },
                    { name: "송중동" },
                    { name: "번동" },
                    { name: "우이동" },
                    { name: "인수동" }
                ]
            },
            {
                name: "도봉구",
                children: [
                    { name: "창동" },
                    { name: "도봉동" },
                    { name: "방학동" },
                    { name: "쌍문동" },
                    { name: "상계동" }
                ]
            },
            {
                name: "노원구",
                children: [
                    { name: "월계동" },
                    { name: "공릉동" },
                    { name: "하계동" },
                    { name: "중계동" },
                    { name: "상계동" }
                ]
            },
            {
                name: "금천구",
                children: [
                    { name: "가산동" },
                    { name: "독산동" },
                    { name: "시흥동" }
                ]
            },
            {
                name: "구로구",
                children: [
                    { name: "신도림동" },
                    { name: "구로동" },
                    { name: "고척동" },
                    { name: "개봉동" },
                    { name: "오류동" },
                    { name: "천왕동" },
                    { name: "항동" }
                ]
            },
            {
                name: "관악구",
                children: [
                    { name: "봉천동" },
                    { name: "신림동" }
                ]
            },
            {
                name: "서대문구",
                children: [
                    { name: "충현동" },
                    { name: "천연동" },
                    { name: "북아현동" },
                    { name: "신촌동" },
                    { name: "연희동" },
                    { name: "홍제동" },
                    { name: "홍은동" },
                    { name: "남가좌동" },
                    { name: "북가좌동" }
                ]
            },
            {
                name: "중랑구",
                children: [
                    { name: "면목동" },
                    { name: "상봉동" },
                    { name: "중화동" },
                    { name: "묵동" },
                    { name: "망우동" },
                    { name: "신내동" }
                ]
            }
        ]
    }
];
function main(){
    const keyword = '유품관리';
      
    cities.map((city) => {
        console.log(`city=${city.name}`)
        if(city.children){
            city.children.map((gu) => {
                console.log(`${gu.name}${keyword}`)
                if(gu.children){
                    gu.children.map((dong) => {
                        console.log(`\t${dong.name}${keyword}`)
                    });
                }
            });
        }
        
    });
}
main();