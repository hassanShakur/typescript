type master = {
  skills: string;
  disciples: string[];
};

type disciple = {
  skill: string;
};

type apprentice = master & disciple;
const appr: apprentice = {
  skills: 'Some skills',
  disciples: ['yen', 'chen'],
  skill: 'wing-chun',
};
