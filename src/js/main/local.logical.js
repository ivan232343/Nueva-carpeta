let banner = document.getElementById("background_custom")
let avatar = document.getElementById("avatar_custom")
let areaSelected = document.getElementById("area_custom")
avatar.addEventListener("input", (e) => {
    document.querySelector(".user-info .image img").src = e.target.value
    SaveSettingCrm();
})
banner.addEventListener("input", (e) => {
    document.querySelector(".user-info").style.backgroundImage = `url(${e.target.value})`
    SaveSettingCrm();
})
avatar.addEventListener("click", (e) => e.target.select())
banner.addEventListener("click", (e) => e.target.select())
areaSelected.addEventListener("change", () => {
    SaveSettingCrm()
    document.querySelectorAll(".email")[1].innerText = `Area: AT - ${JSON.parse(localStorage.configCRM).profileConfig.area}`
})
document.querySelectorAll(".item [type=checkbox]").forEach((e) => {
    e.addEventListener("change", () => SaveSettingCrm())
})