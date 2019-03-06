const express = require('express');
const router = express.Router();

const projectJSON = require('../projects');
const trackerJSON = require('../projectTracker');
const personalJSON = require('../personalWebsite');
const rosterJSON = require('../rosterSchedule');

router.get('/', (req, res) => res.render('projects/index', {
	title: 'aff.dev | Projects',
	activeProjects: projectJSON.projects.filter(project => project.category === 'active_projects'),
	oldProjects: projectJSON.projects.filter(project => project.category === 'old_projects'),
	navActive: null
	
}));
router.get('/personal-website', (req, res) => res.render('projects/projectStructure', {
	title: 'aff.dev | Personal Website',
	navActive: 'personalWebsite',
	projects: personalJSON.tasks,
	bugs: personalJSON.bugs,
	progress: personalJSON.progress,
	info: personalJSON.info
}));

router.get('/project-tracker', (req, res) => res.render('projects/projectStructure', {
	title: 'aff.dev | Project Tracker',
	navActive: 'projectTracker',
	projects: trackerJSON.tasks,
	bugs: trackerJSON.bugs,
	progress: trackerJSON.progress,
	info: trackerJSON.info
}));

router.get('/roster-schedule', (req, res) => res.render('projects/projectStructure', {
	title: 'aff.dev | Roster Schedule',
	navActive: 'rosterSchedule',
	projects: rosterJSON.tasks,
	bugs: rosterJSON.bugs,
	progress: rosterJSON.progress,
	info: rosterJSON.info
}));

module.exports = router;