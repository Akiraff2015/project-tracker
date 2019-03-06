const express = require('express');
const router = express.Router();

const projectJSON = require('../projects');
const trackerJSON = require('../projectTracker');
const personalJSON = require('../personalWebsite');

router.get('/', (req, res) => res.render('projects/index', {
	title: 'aff.dev | Projects',
	activeProjects: projectJSON.projects.filter(project => project.category === 'active_projects'),
	oldProjects: projectJSON.projects.filter(project => project.category === 'old_projects'),
	navActive: null
	
}));
router.get('/personal-website', (req, res) => res.render('projects/personalWebsite', {
	title: 'aff.dev | Personal Website',
	navActive: 'personalWebsite',
	projects: personalJSON.tasks,
	bugs: personalJSON.bugs,
	progress: personalJSON.progress
}));

router.get('/project-tracker', (req, res) => res.render('projects/projectTracker', {
	title: 'aff.dev | Project Tracker',
	navActive: 'projectTracker',
	projects: trackerJSON.tasks,
	bugs: trackerJSON.bugs,
	progress: trackerJSON.progress
}));

router.get('/roster-schedule', (req, res) => res.render('projects/rosterSchedule', {
	title: 'aff.dev | Roster Schedule',
	navActive: 'rosterSchedule'
}));

module.exports = router;