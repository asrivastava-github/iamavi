import {
  greeting,
  socialMediaLinks,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo
} from "./portfolio";

vi.mock("react-easy-emoji", () => ({
  default: (input) => input
}));

describe("portfolio data", () => {
  it("greeting.username equals 'iamavi'", () => {
    expect(greeting.username).toBe("iamavi");
  });

  it("socialMediaLinks has github, linkedin, gmail", () => {
    expect(socialMediaLinks.github).toBeDefined();
    expect(socialMediaLinks.linkedin).toBeDefined();
    expect(socialMediaLinks.gmail).toBeDefined();
  });

  it("workExperiences has 5 entries", () => {
    expect(workExperiences.experience).toHaveLength(5);
  });

  it("bigProjects has 8 projects", () => {
    expect(bigProjects.projects).toHaveLength(8);
  });

  it("achievementSection has certifications", () => {
    expect(achievementSection.achievementsCards.length).toBeGreaterThan(0);
  });

  it("blogSection has 2 blogs", () => {
    expect(blogSection.blogs).toHaveLength(2);
  });

  it("contactInfo has email", () => {
    expect(contactInfo.email_address).toBeDefined();
    expect(contactInfo.email_address).toBe("er.srivastava@gmail.com");
  });
});
