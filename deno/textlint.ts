// Original is https://github.com/kn1cht/run-textlint-on-deno
import { TextLintEngine } from "npm:textlint";
import "npm:textlint-rule-preset-japanese";

const engine = new TextLintEngine();
const results = await engine.executeOnFiles(Deno.args);
if (engine.isErrorResults(results)) {
  console.error(engine.formatResults(results));
  Deno.exit(1);
}
