// make the footer full width
let pageFooterContainer = $(".page-footer>.container");
pageFooterContainer.addClass("container-fluid");
pageFooterContainer.removeClass("container");
pageFooterContainer.css("padding-left", "0");
pageFooterContainer.css("padding-right", "0");

// Load the projects dashboard table content
loadProjectDashboard = async function() {

    let rootUrl = window.location.href + "../";

    if (rootUrl.includes("localhost")) {
        rootUrl = "https://keypop.org/";
    }

    async function getJson(fileName) {
        let response = await fetch(rootUrl + 'dashboard/' + fileName + '.json?date='+Date.now());
        return await response.json();
    }

    async function getJsonRepositoryData(repository_name, resource) {
        let response = await fetch(rootUrl + 'dashboard/' + repository_name + resource + '.json?date='+Date.now());
        return await response.json();
    }

    async function getReposData(rowIndex, owner, project) {

        // create row
        let newRow = body.insertRow();
        newRow.id = rowIndex;

        const json = await getJsonRepositoryData(project[0], "_");

        // new row
        const row = document.getElementById(rowIndex);

        // column repos name
        let cell = row.insertCell(-1);
        let a = document.createElement('a');
        let linkText = document.createTextNode(json.name);
        a.appendChild(linkText);
        a.title = json.name;
        a.href = json.html_url;
        a.target = "_blank";
        cell.appendChild(a);

        // column doc
        cell = row.insertCell(-1);
        if (project[1] === true) {
            cell.setAttribute("class", "text-center");
            let space = document.createTextNode("  ");
            cell.appendChild(space);
            a = document.createElement('a');
            cell.appendChild(space);
            a.innerHTML = "<i class=\"fas fa-book\"></i>";
            a.title = "API documentation for " + json.name;
            a.href = "https://docs.keypop.org/" + json.name;
            a.target = "_blank";
            cell.appendChild(a);
        }

        // column repos status
        cell = row.insertCell(-1);
        cell.setAttribute("id", "repos-status-" + rowIndex);
        cell.setAttribute("class", "text-center");

        // column latest release
        cell = row.insertCell(-1);
        cell.setAttribute("id", "latest-release-" + rowIndex);
        cell.setAttribute("class", "text-center");
        cell.appendChild(document.createTextNode(""));

        // column release date
        cell = row.insertCell(-1);
        cell.setAttribute("id", "release-date-" + rowIndex);
        cell.setAttribute("class", "text-center");
        cell.appendChild(document.createTextNode(""));

        // column latest tag
        cell = row.insertCell(-1);
        cell.setAttribute("id", "latest-tag-" + rowIndex);
        cell.setAttribute("class", "text-center");
        cell.appendChild(document.createTextNode(""));

        // column issues
        cell = row.insertCell(-1);
        cell.setAttribute("id", "issue-" + rowIndex);
        cell.setAttribute("class", "text-center");
        cell.appendChild(document.createTextNode(json.open_issues_count.toString()));
        if (json.open_issues_count > 0) {
            cell.style.backgroundColor = "orange";
        }

        // column branches
        cell = row.insertCell(-1);
        cell.setAttribute("id", "branch-" + rowIndex);
        cell.setAttribute("class", "text-center");
        cell.appendChild(document.createTextNode(""));

        // column pull requests
        cell = row.insertCell(-1);
        cell.setAttribute("id", "pull-" + rowIndex);
        cell.setAttribute("class", "text-center");
        cell.appendChild(document.createTextNode(""));

        // column forks
        cell = row.insertCell(-1);
        cell.setAttribute("class", "text-center");
        cell.appendChild(document.createTextNode(json.forks.toString()));

        // column stars
        cell = row.insertCell(-1);
        cell.setAttribute("class", "text-center");
        cell.appendChild(document.createTextNode(json.stargazers_count.toString()));

        // column updated
        cell = row.insertCell(-1);
        cell.setAttribute("class", "text-center");
        cell.innerHTML = formatDate(json.pushed_at);

        // column created
        cell = row.insertCell(-1);
        cell.setAttribute("class", "text-center");
        cell.innerHTML = formatDate(json.created_at);

        // get complementary data
        await getBranches(rowIndex, owner, project[0]);
        await getPullData(rowIndex, owner, project[0]);
        await getLatestRelease(rowIndex, owner, project[0]);
        await getReleaseDate(rowIndex, owner, project[0]);
        await getLatestTag(rowIndex, owner, project[0]);
        if (project[2] === true) {
            await getStatus(rowIndex, owner, project[0]);
        }

        // debug
        console.log(json.data);
    }

    async function getBranches(rowIndex, owner, repos) {
        const json = await getJsonRepositoryData(repos, "_branches");
        let cell = document.getElementById("branch-" + rowIndex);
        cell.innerHTML = '' + json.length;
        if (json.length > 2) {
            cell.style.backgroundColor = "#FFE0F0";
        }
    }

    async function getPullData(rowIndex, owner, repos) {
        const json = await getJsonRepositoryData(repos, "_pulls");
        let cell = document.getElementById("pull-" + rowIndex);
        if (json.length > 0) {
            cell.style.backgroundColor = "orange";
        }
        cell.innerHTML = json.length;
    }

    async function getLatestRelease(rowIndex, owner, repos) {
        let cell = document.getElementById("latest-release-" + rowIndex);
        try {
            const json = await getJsonRepositoryData(repos, "_releases_latest");
            if (json.tag_name !== undefined) {
                cell.innerHTML = json.tag_name;
            }
        } catch (err) {
        }
    }

    async function getReleaseDate(rowIndex, owner, repos) {
        let cell = document.getElementById("release-date-" + rowIndex);
        try {
            const json = await getJsonRepositoryData(repos, "_releases_latest");
            if (json.tag_name !== undefined) {
                cell.innerHTML = formatDate(json.published_at);
            }
        } catch (err) {
        }
    }

    async function getLatestTag(rowIndex, owner, repos) {
        if (repos === "keypop-actions") {
            // do not display useless tag for this repos
            return;
        }
        let cell = document.getElementById("latest-tag-" + rowIndex);
        try {
            const json = await getJsonRepositoryData(repos, "_tags");
            cell.innerHTML = json[0].name;
        } catch (err) {
        }
    }

    async function getStatus(rowIndex, owner, repos) {
        let cell = document.getElementById("repos-status-" + rowIndex);
        let json;
        let a = document.createElement('a');
        let linkText = document.createTextNode("\u2b24");
        a.appendChild(linkText);
        a.target = "_blank";

        try {
            json = await getJsonRepositoryData(repos, "_check_runs");
        } catch (err) {
        }

        a.title = "CI status page";
        a.href = "https://github.com/" + owner + "/" + repos + "/actions";

        if (json && json.check_runs && json.check_runs[0] && json.check_runs[0].status === "completed") {
            switch (json.check_runs[0].conclusion) {
                case "failure":
                case "action_required":
                case "cancelled":
                case "skipped":
                case "timed-out":
                    a.style.color = "red";
                    break;
                case "neutral":
                    a.style.color = "lightgreen";
                    break;
                case "success":
                    a.style.color = "green";
                    break;
            }
        } else {
            a.style.color = "orange";
        }

        cell.appendChild(a);
    }

    function formatDate(dateString) {
        let d = new Date(dateString),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            hour = '' + d.getHours(),
            min = '' + d.getMinutes(),
            sec = '' + d.getSeconds();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        const date = [year, month, day].join('-');

        if (hour.length < 2)
            hour = '0' + hour;
        if (min.length < 2)
            min = '0' + min;
        if (sec.length < 2)
            sec = '0' + sec;

        const time = [hour, min, sec].join(':');

        return '<span data-toggle="tooltip" title="' + date + ' ' + time + '">' + date + '</span>';
    }

    let owner = "eclipse-keypop";

    const lastUpdate = await getJson('datetime');
    const date = new Date(lastUpdate.datetime);

    const offset = date.getTimezoneOffset();
    const isoLocalDate = new Date(date.getTime() - (offset*60*1000));

    const dateOptions = {hour: '2-digit', minute:'2-digit', hour12: false, timeZoneName: 'short'};
    $("#project-dashboard-datetime")[0].innerHTML = isoLocalDate.toISOString().split('T')[0] + ", " + date.toLocaleTimeString('en-EN', dateOptions);

    let projects = await getJson('repository_list');

    // create promises
    const body = document.getElementById("project-dashboard-content");
    let promises = [];
    for (let i = 0; i < projects.length; i++) {
        let promise = getReposData((i + 1).toString(), owner, projects[i])
        promises.push(promise);
    }

    await (async () => {
        await Promise.all(promises)
            .finally(function () {
                $('#project-dashboard-table').DataTable({
                    "lengthMenu": [25, 50, 75, 100],
                    "pageLength": 50,
                    "order": [[11, 'desc']],
                    "oLanguage": {"sSearch": "Filter:"}
                });
                $('.dataTables_length').addClass('bs-select');
                // update the container's width with the real table size if possible
                let dashboard = $('#project-dashboard-table')[0];
                if (dashboard.scrollWidth < window.innerWidth) {
                    $('.universal-wrapper').width(dashboard.scrollWidth);
                } else {
                    $('.universal-wrapper').width(window.innerWidth - 50);
                    // Remove nowrap style for all cells of first row
                    for (let i = 0; i < dashboard.rows[0].cells.length; i++) {
                        dashboard.rows[0].cells[i].style.whiteSpace = 'normal';
                    }
                    if (dashboard.scrollWidth > window.innerWidth - 50) {
                        // Remove nowrap style for first cell of all rows
                        for (let i = 0; i < dashboard.rows.length; i++) {
                            dashboard.rows[i].cells[0].style.whiteSpace = 'normal';
                        }
                    }
                }
            });
    })();
}
