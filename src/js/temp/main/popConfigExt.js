
if (!ValidatePath(['index', 'login_form']).some(path => path)) {
    let DataReader = JSON.parse(localStorage.configCRM)
    document.querySelector(".nav.navbar-nav.navbar-right").innerHTML = `
    <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="margin-top:8px;" role="button">
        <i class="material-icons">settings</i>
        <span class="label-count"><span class="count"></span></span>
    </a>
    <div class="dropdown-menu">
        <div class="header">Configuracion de la extension</div>
        <div class="body">
            <div class="menu">
                <div class="extension content _settings">
                    <div class="box _profile-sett">
                        <div class="item">
                            <label for="avatar_custom">Avatar</label>
                            <input type="text" name="avatar_custom" id="avatar_custom" value="${DataReader.avatar}">
                        </div>
                        <div class="item">
                            <label for="banner_custom">Banner</label>
                            <input type="text" name="banner_custom" id="banner_custom" value="${DataReader.background}">
                        </div>
                    </div>
                    <div class="item _box-addons">
                        <div class="_box general">
                            <h3>Herramientas general</h3>
                            <div class="item">
                                <div class="_sub">
                                    <label for="sc-ag">Agendar</label>
                                    <input type="checkbox" name="sc-ag" id="sc-ag" ${(DataReader.extFunction.agendar)
            ? "checked" : ""}>
                                </div>
                                <div class="_sub">
                                    <label for="sc-multiupload">Multi Upload image</label>
                                    <input type="checkbox" name="sc-multiupload" id="sc-multiupload"
                                        ${(DataReader.extFunction.multiupload) ? "checked" : ""}>
                                </div>
                                <div class="_sub">
                                    <label for="sc-hist">Historial</label>
                                    <input type="checkbox" name="sc-hist" id="sc-hist"
                                        ${(DataReader.extFunction.listTkt) ? "checked" : ""}>
                                </div>
                                <div class="_sub">
                                    <label for="sc-info">Info serv.</label>
                                    <input type="checkbox" name="sc-info" id="sc-info"
                                        ${(DataReader.extFunction.serviceinfo) ? "checked" : ""}>
                                </div>

                                <div class="_sub">
                                    <label for="sc-limitchar">Limitador de caracteres</label>
                                    <input type="checkbox" name="sc-limitchar" id="sc-limitchar"
                                        ${(DataReader.extFunction.limitChar) ? "checked" : ""}>
                                </div>
                            </div>
                        </div>
                        <div class="_box monitoreo">
                            <h3>Monitoreo</h3>
                            <div class="item">
                                <div class="_sub">
                                    <label for="sc-alertcto">Alertar CTO</label>
                                    <input type="checkbox" name="sc-alertcto" id="sc-alertcto"
                                        ${(DataReader.extFunction.alertcto) ? "checked" : ""}>
                                </div>
                                <div class="_sub">
                                    <label for="sc-syncpext">Sync cto de PEXT(problemas de rendimiento)</label>
                                    <input type="checkbox" name="sc-syncpext" id="sc-syncpext"
                                        ${(DataReader.extFunction.syncPext) ? "checked" : ""}>
                                </div>
                                <div class="_sub">
                                    <label for="sc-slosrojo">Enviar LOS ROJO</label>
                                    <input type="checkbox" name="sc-slosrojo" id="sc-slosrojo"
                                        ${(DataReader.extFunction.sendLosRojo) ? "checked" : ""}>
                                </div>
                                <div class="_sub">
                                    <label for="sc-closelosrojo">Cerrar tkt LOS ROJO</label>
                                    <input type="checkbox" name="sc-closelosrojo" id="sc-closelosrojo"
                                        ${(DataReader.extFunction.sendLosRojo) ? "checked" : ""}>
                                </div>
                                <div class="_sub">
                                    <label for="sc-gtxm">conteo de motivo al mes</label>
                                    <input type="checkbox" name="sc-gtxm" id="sc-gtxm"
                                        ${(DataReader.extFunction.gcounttm) ? "checked" : ""}>
                                </div>
                            </div>
                        </div>
                        <div class="_box dgo">
                            <h3>DGO</h3>
                            <div class="item">
                                <div class="_sub">
                                    <label for="sc-clsdgo">Cerrar tkt (DGO)</label>
                                    <input type="checkbox" name="sc-clsdgo" id="sc-clsdgo"
                                        ${(DataReader.extFunction.findgo) ? "checked" : ""}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item _box-extrasconfig">
                        <div class="_box fastlogin">
                            <div class="area-form">
                                <label for="dniasesor">Configura tu logeo rapido</label>
                                <input type="password" name="dniasesor" id="dniasesor">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
        </div>
    </div>
</li>
`

    function SaveSettingCrm() {
        let toChange = {
            "TempAvatar": document.getElementById("avatar_custom").value,
            "TempBanner": document.getElementById("banner_custom").value,
            "ShortCutAgendar": document.getElementById("sc-ag").checked,
            "ShortCutHistorial": document.getElementById("sc-hist").checked,
            "MultiUploadSend": document.getElementById("sc-multiupload").checked,
            "ShortCutInfoServ": document.getElementById("sc-info").checked,
            "ShortCutCloseDgo": document.getElementById("sc-clsdgo").checked,
            "ShortLimitCharDesc": document.getElementById("sc-limitchar").checked,
            "ShortAlertCTO": document.getElementById('sc-alertcto').checked,
            'ShortCutLosRojo': document.getElementById('sc-slosrojo').checked,
            'ShoetCutSyncPext': document.getElementById('sc-syncpext').checked,
            'ShortgetCountTicketM': document.getElementById('sc-gtxm').checked,
            'ShortCutCloseLosRojo': document.getElementById('sc-closelosrojo').checked
        }
        let SaveSetting = {
            "avatar": toChange.TempAvatar,
            "background": toChange.TempBanner,
            "extFunction": {
                "agendar": toChange.ShortCutAgendar,
                "findgo": toChange.ShortCutCloseDgo,
                "listTkt": toChange.ShortCutHistorial,
                "serviceinfo": toChange.ShortCutInfoServ,
                "limitChar": toChange.ShortLimitCharDesc,
                "alertcto": toChange.ShortAlertCTO,
                "sendLosRojo": toChange.ShortCutLosRojo,
                "syncPext": toChange.ShoetCutSyncPext,
                "finlosrojo": toChange.ShortCutCloseLosRojo,
                "gcounttm": toChange.ShortgetCountTicketM,
                "multiupload": toChange.MultiUploadSend
            }
        }
        localStorage.configCRM = JSON.stringify(SaveSetting)
    }
    let banner = document.getElementById("banner_custom")
    let avatar = document.getElementById("avatar_custom")
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
    document.querySelectorAll(".item [type=checkbox]").forEach((e) => {
        e.addEventListener("change", () => SaveSettingCrm())
    })
}