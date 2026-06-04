import { existsSync } from "fs";
import { join } from "path";

import { assets } from "../../content/assets";
import { routes } from "../../content/routes";
import { brand } from "../../content/brand";
import { navigation, globalCtas } from "../../content/navigation";
import { homePage } from "../../content/pages/home";
import {
  expertiseDetailPages,
  expertiseItems,
  expertiseLandingPage,
  trainingPageContent,
} from "../../content/pages/expertise";
import { trainingTopics } from "../../content/pages/training";
import { regions } from "../../content/pages/international";
import { aboutPage } from "../../content/pages/about";
import { contactPage } from "../../content/pages/contact";
import { jocelyneKatshindaPage } from "../../content/pages/jocelyne-katshinda";

const errors: string[] = [];
const warnings: string[] = [];

function checkLocalizedText(obj: Record<string, unknown>, path: string) {
  if (obj && typeof obj === "object") {
    if ("fr" in obj && "en" in obj) {
      const fr = obj.fr;
      const en = obj.en;
      if (!fr || typeof fr !== "string" || (fr as string).trim() === "") {
        errors.push(`${path}: Missing or empty FR translation`);
      }
      if (!en || typeof en !== "string" || (en as string).trim() === "") {
        errors.push(`${path}: Missing or empty EN translation`);
      }
    }
  }
}

function checkAssetExists(src: string, path: string) {
  const publicPath = join(process.cwd(), "public", src);
  if (!existsSync(publicPath)) {
    errors.push(`${path}: Asset not found at ${publicPath}`);
  }
}

function validateAssets() {
  console.log("Validating assets...");

  Object.entries(assets).forEach(([category, items]) => {
    Object.entries(items).forEach(([key, asset]) => {
      const path = `assets.${category}.${key}`;
      
      if (asset.src.startsWith("public/")) {
        errors.push(`${path}.src: Path should not start with 'public/'`);
      }
      
      checkAssetExists(asset.src, path);
      checkLocalizedText(asset.alt, `${path}.alt`);
    });
  });
}

function validateRoutes() {
  console.log("Validating routes...");
  
  Object.entries(routes).forEach(([key, path]) => {
    if (!path.startsWith("/")) {
      errors.push(`routes.${key}: Route should start with '/'`);
    }
  });
}

function validateBrand() {
  console.log("Validating brand...");
  
  if (brand.name !== "Resilience@Work") {
    errors.push(`brand.name: Must be exactly "Resilience@Work"`);
  }

  checkLocalizedText(brand.person.role, "brand.person.role");

  if (!brand.contact.email.includes("@")) {
    errors.push("brand.contact.email: Invalid email format");
  }

  if (brand.socials.linkedin.enabled && !brand.socials.linkedin.href) {
    warnings.push("brand.socials.linkedin: Enabled but no href provided");
  }

  if (brand.socials.facebook.enabled && !brand.socials.facebook.href) {
    warnings.push("brand.socials.facebook: Enabled but no href provided");
  }
}

function validateNavigation() {
  console.log("Validating navigation...");
  
  navigation.forEach((item, idx) => {
    const path = `navigation[${idx}]`;
    if (item.label) {
      checkLocalizedText(item.label as Record<string, unknown>, `${path}.label`);
    }
    
    if (item.route && !routes[item.route]) {
      errors.push(`${path}.route: Route key "${item.route}" not found in routes`);
    }

    if (item.children) {
      item.children.forEach((child, childIdx) => {
        const childPath = `${path}.children[${childIdx}]`;
        if (child.label) {
          checkLocalizedText(child.label as Record<string, unknown>, `${childPath}.label`);
        }
        if (child.route && !routes[child.route]) {
          errors.push(`${childPath}.route: Route key "${child.route}" not found in routes`);
        }
      });
    }
  });

  Object.entries(globalCtas).forEach(([key, cta]) => {
    const path = `globalCtas.${key}`;
    checkLocalizedText(cta.label as Record<string, unknown>, `${path}.label`);
  });
}

function validateHomePage() {
  console.log("Validating home page...");
  
  checkLocalizedText(homePage.hero.eyebrow, "homePage.hero.eyebrow");
  checkLocalizedText(homePage.hero.title, "homePage.hero.title");
  checkLocalizedText(homePage.hero.description, "homePage.hero.description");
  
  checkLocalizedText(homePage.intro.title, "homePage.intro.title");
  checkLocalizedText(homePage.expertise.eyebrow, "homePage.expertise.eyebrow");
  checkLocalizedText(homePage.expertise.title, "homePage.expertise.title");
  checkLocalizedText(homePage.expertise.description, "homePage.expertise.description");
  
  homePage.highlights.forEach((item, idx) => {
    const path = `homePage.highlights[${idx}]`;
    checkLocalizedText(item.value, `${path}.value`);
    checkLocalizedText(item.label, `${path}.label`);
  });

  checkLocalizedText(homePage.impact.title, "homePage.impact.title");
  checkLocalizedText(homePage.methodology.eyebrow, "homePage.methodology.eyebrow");
  checkLocalizedText(homePage.methodology.title, "homePage.methodology.title");

  homePage.methodology.steps.forEach((step, idx) => {
    const path = `homePage.methodology.steps[${idx}]`;
    checkLocalizedText(step.title, `${path}.title`);
    checkLocalizedText(step.description, `${path}.description`);
  });

  checkLocalizedText(homePage.international.title, "homePage.international.title");
  checkLocalizedText(homePage.profile.title, "homePage.profile.title");
  checkLocalizedText(homePage.profile.description, "homePage.profile.description");
  checkLocalizedText(homePage.finalCta.title, "homePage.finalCta.title");
  checkLocalizedText(homePage.finalCta.description, "homePage.finalCta.description");
}

function validateExpertise() {
  console.log("Validating expertise...");
  
  expertiseItems.forEach((item, idx) => {
    const path = `expertiseItems[${idx}]`;
    checkLocalizedText(item.title, `${path}.title`);
    checkLocalizedText(item.summary, `${path}.summary`);
    
    if (!routes[item.route]) {
      errors.push(`${path}.route: Route key "${item.route}" not found`);
    }

    if (!item.image.src) {
      errors.push(`${path}.image: Missing image src`);
    }

    if (!item.slug || item.slug.trim() === "") {
      errors.push(`${path}.slug: Missing slug`);
    }
  });

  checkLocalizedText(expertiseLandingPage.hero.title, "expertiseLandingPage.hero.title");
  checkLocalizedText(trainingPageContent.title, "trainingPageContent.title");

  expertiseDetailPages.forEach((page, idx) => {
    const path = `expertiseDetailPages[${idx}]`;
    checkLocalizedText(page.title, `${path}.title`);
    checkLocalizedText(page.summary, `${path}.summary`);
    if (!page.slug) {
      errors.push(`${path}.slug: Missing slug`);
    }
  });
}

function validateTraining() {
  console.log("Validating training...");
  
  trainingTopics.forEach((topic, idx) => {
    const path = `trainingTopics[${idx}]`;
    checkLocalizedText(topic.title, `${path}.title`);
    checkLocalizedText(topic.summary, `${path}.summary`);
  });
}

function validateRegions() {
  console.log("Validating regions...");
  
  regions.forEach((region, idx) => {
    const path = `regions[${idx}]`;
    checkLocalizedText(region.title, `${path}.title`);
    checkLocalizedText(region.summary, `${path}.summary`);
  });
}

function validateAbout() {
  console.log("Validating about page...");
  
  checkLocalizedText(aboutPage.hero.title, "aboutPage.hero.title");
  checkLocalizedText(aboutPage.mission.title, "aboutPage.mission.title");
  
  aboutPage.values.forEach((value, idx) => {
    const path = `aboutPage.values[${idx}]`;
    checkLocalizedText(value.title, `${path}.title`);
    checkLocalizedText(value.description, `${path}.description`);
  });
}

function validateContact() {
  console.log("Validating contact page...");
  
  checkLocalizedText(contactPage.hero.title, "contactPage.hero.title");
  
  contactPage.form.fields.forEach((field, idx) => {
    const path = `contactPage.form.fields[${idx}]`;
    checkLocalizedText(field.label, `${path}.label`);
  });
}

function validateJocelynePortfolio() {
  console.log("Validating Jocelyne portfolio page...");

  checkLocalizedText(jocelyneKatshindaPage.hero.eyebrow, "jocelyneKatshindaPage.hero.eyebrow");
  checkLocalizedText(jocelyneKatshindaPage.hero.role, "jocelyneKatshindaPage.hero.role");
  checkLocalizedText(jocelyneKatshindaPage.hero.intro, "jocelyneKatshindaPage.hero.intro");
  checkLocalizedText(jocelyneKatshindaPage.hero.goal, "jocelyneKatshindaPage.hero.goal");
  checkLocalizedText(jocelyneKatshindaPage.introduction.title, "jocelyneKatshindaPage.introduction.title");
  checkLocalizedText(jocelyneKatshindaPage.mission.title, "jocelyneKatshindaPage.mission.title");
  checkLocalizedText(jocelyneKatshindaPage.finalContact.title, "jocelyneKatshindaPage.finalContact.title");
}

function main() {
  console.log("\n🔍 Starting content validation...\n");

  validateAssets();
  validateRoutes();
  validateBrand();
  validateNavigation();
  validateHomePage();
  validateExpertise();
  validateTraining();
  validateRegions();
  validateAbout();
  validateContact();
  validateJocelynePortfolio();

  console.log("\n📊 Validation results:\n");

  if (errors.length > 0) {
    console.error(`❌ ${errors.length} error(s) found:\n`);
    errors.forEach((err) => console.error(`  - ${err}`));
  }

  if (warnings.length > 0) {
    console.warn(`\n⚠️  ${warnings.length} warning(s):\n`);
    warnings.forEach((warn) => console.warn(`  - ${warn}`));
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log("✅ All validations passed!\n");
  }

  if (errors.length > 0) {
    process.exit(1);
  }
}

main();
