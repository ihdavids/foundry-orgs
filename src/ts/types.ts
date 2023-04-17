import { ModuleData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/packages.mjs";
import OrgsView from "./apps/orgsView";

export interface OrgModule extends Game.ModuleData<ModuleData> {
  orgsViewer: OrgsView;
}
