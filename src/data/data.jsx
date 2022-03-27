/**
 * @type {Project[]}
 */
  /* Define project list */
  let projects = [
    {
      name: "Life Nature Fashion",
      number: 1,
      amount: "$11,200",
      due: "02/15/2012"
    },
    {
      name: "Handoc",
      number: 2,
      amount: "$7,500",
      due: "11/01/2015"
    },
    {
      name: "Samsung C&T",
      number: 3,
      amount: "$8,000",
      due: "02/22/2018"
    },
    {
      name: "Cosmetic Products brochure",
      number: 4,
      amount: "$12,500",
      due: "09/11/2020"
    },
    {
      name: "BC card Nobles card leaflet",
      number: 5,
      amount: "$4,500",
      due: "03/27/2021"
    }
  ];
  
  export function getProjects() {
    return projects;
  }
  
  /**
   * @param {number} number
   * @returns {Project}
   */
  export function getProject(number) {
    return projects.find(project => project.number === number);
  }
  
  /**
   * @typedef {{ name: string; number: number; amount: string; due: string }} Project
   */
  