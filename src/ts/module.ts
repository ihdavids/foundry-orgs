// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import "../styles/style.scss";
import OrgsView from "./apps/orgsView";
import { moduleId } from "./constants";
import { OrgModule } from "./types";

let module: OrgModule;

Hooks.once("init", () => {
  console.log(`Initializing ${moduleId}`);

  module = (game as Game).modules.get(moduleId) as OrgModule;
  module.orgsViewer = new OrgsView();
});

Hooks.on("renderActorDirectory", (_: Application, html: JQuery) => {
  const button = $(
    `<button class="cc-sidebar-button" type="button">🐶</button>`
  );
  button.on("click", () => {
    module.orgsViewer.render(true);
  });
  html.find(".directory-header .action-buttons").append(button);
});
