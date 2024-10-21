import bootstrap from "bootstrap";

function Courses() {
  return (
    <div>
      <h4>Courses I've taken</h4>
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active py-0" id="v-pills-it101-tab" data-bs-toggle="pill" data-bs-target="#v-pills-it101" type="button" role="tab" aria-controls="v-pills-it101" aria-selected="true">IT101</button>
          <button class="nav-link py-0" id="v-pills-cs100-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs100" type="button" role="tab" aria-controls="v-pills-cs100" aria-selected="false">CS100</button>
          <button class="nav-link py-0" id="v-pills-cs113-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs113" type="button" role="tab" aria-controls="v-pills-cs113" aria-selected="false">CS113</button>
          <button class="nav-link py-0" id="v-pills-cs114-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs114" type="button" role="tab" aria-controls="v-pills-cs114" aria-selected="false">CS114</button>
          <button class="nav-link py-0" id="v-pills-cs241-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs241" type="button" role="tab" aria-controls="v-pills-cs241" aria-selected="false">CS241</button>
          <button class="nav-link py-0" id="v-pills-cs280-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs280" type="button" role="tab" aria-controls="v-pills-cs280" aria-selected="false">CS280</button>
          <button class="nav-link py-0" id="v-pills-cs288-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs288" type="button" role="tab" aria-controls="v-pills-cs288" aria-selected="false">CS288</button>
          <button class="nav-link py-0" id="v-pills-cs301-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs301" type="button" role="tab" aria-controls="v-pills-cs301" aria-selected="false">CS301</button>
          <button class="nav-link py-0" id="v-pills-cs331-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs331" type="button" role="tab" aria-controls="v-pills-cs331" aria-selected="false">CS331</button>
          <button class="nav-link py-0" id="v-pills-cs332-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs332" type="button" role="tab" aria-controls="v-pills-cs332" aria-selected="false">CS332</button>
          <button class="nav-link py-0" id="v-pills-cs341-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs341" type="button" role="tab" aria-controls="v-pills-cs341" aria-selected="false">CS341</button>
          <button class="nav-link py-0" id="v-pills-cs356-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs356" type="button" role="tab" aria-controls="v-pills-cs356" aria-selected="false">CS356</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-it101" role="tabpanel" aria-labelledby="v-pills-it101-tab" tabindex="0">1</div>
          <div class="tab-pane fade" id="v-pills-cs100" role="tabpanel" aria-labelledby="v-pills-cs100-tab" tabindex="0">2</div>
          <div class="tab-pane fade" id="v-pills-cs113" role="tabpanel" aria-labelledby="v-pills-cs113-tab" tabindex="0">3</div>
          <div class="tab-pane fade" id="v-pills-cs114" role="tabpanel" aria-labelledby="v-pills-cs114-tab" tabindex="0">4</div>
          <div class="tab-pane fade" id="v-pills-cs241" role="tabpanel" aria-labelledby="v-pills-cs241-tab" tabindex="0">5</div>
          <div class="tab-pane fade" id="v-pills-cs280" role="tabpanel" aria-labelledby="v-pills-cs280-tab" tabindex="0">6</div>
          <div class="tab-pane fade" id="v-pills-cs288" role="tabpanel" aria-labelledby="v-pills-cs288-tab" tabindex="0">7</div>
          <div class="tab-pane fade" id="v-pills-cs301" role="tabpanel" aria-labelledby="v-pills-cs301-tab" tabindex="0">8</div>
          <div class="tab-pane fade" id="v-pills-cs331" role="tabpanel" aria-labelledby="v-pills-cs331-tab" tabindex="0">9</div>
          <div class="tab-pane fade" id="v-pills-cs332" role="tabpanel" aria-labelledby="v-pills-cs332-tab" tabindex="0">10</div>
          <div class="tab-pane fade" id="v-pills-cs341" role="tabpanel" aria-labelledby="v-pills-cs341-tab" tabindex="0">11</div>
          <div class="tab-pane fade" id="v-pills-cs356" role="tabpanel" aria-labelledby="v-pills-cs356-tab" tabindex="0">12</div>
        </div>
      </div>
    </div>
  )
}

export default Courses;