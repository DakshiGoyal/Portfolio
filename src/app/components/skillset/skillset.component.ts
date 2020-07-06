import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  public skills =
    [{
      Domain: 'Competitive Coding',
      set: [
        {
          skill: 'C++',
          level: 0.60
        },
        {
          skill: 'C',
          level: 0.50
        }, {
          skill: 'Python',
          level: 0.70
        },
        {
          skill: 'Java',
          level: 0.60
        }
      ]
    },
    {
      Domain: 'Front-End Web Development',
      set: [
        {
          skill: 'HTML',
          level: 0.80
        },
        {
          skill: 'CSS',
          level: 0.85
        }, {
          skill: 'JS',
          level: 0.80
        },
        {
          skill: 'SASS',
          level: 0.70
        }
      ]
    },
    {
      Domain: 'Web Framework',
      set: [
        {
          skill: 'Vanilla',
          level: 0.50
        },
        {
          skill: 'Angular',
          level: 0.85
        }, {
          skill: 'React',
          level: 0.55
        }
      ]
    }, {
      Domain: 'Backend Frameworks',
      set: [
        {
          skill: 'Flask',
          level: 0.75
        },
        {
          skill: 'Express',
          level: 0.65
        }, {
          skill: 'Spring',
          level: 0.60
        }
      ]
    },
    {
      Domain: 'Databases',
      set: [
        {
          skill: 'Postgres',
          level: 0.80
        },
        {
          skill: 'MongoDB',
          level: 0.70
        }
      ]
    },
    {
      Domain: 'Version Control',
      set: [
        {
          skill: 'Git',
          level: 0.90
        }
      ]
    },
    ];
  constructor() { }

  ngOnInit() {
  }

}
