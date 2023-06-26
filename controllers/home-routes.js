const router = require('express').Router();
const { Techblog, UserBlog, } = require('../models');
// const { TechBlog, UserLogin } = require('../models/Techblog/Userlogin');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbTechBlog = await Techblog.findAll({
      include: [
        {
          model: UserBlog,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const techblog = dbTechBlog.map((techblog) =>
      techblog.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      techblog,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/techblog/:id', async (req, res) => {
  try {
    const dbTechBlog = await Techblog.findByPk(req.params.id, {
      include: [
        {
          model: UserBlog,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const techblog = dbTechBlog.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('techblog', { techblog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/userblog/:id', async (req, res) => {
  try {
    const dbUserBlog = await UserBlog.findByPk(req.params.id);

    const UserBlog = dbUserBlog.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('userblog', { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
