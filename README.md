# Wagtail CMS Template Project

This is a template project for [Wagtail CMS](https://wagtail.org/) that can be used as a starting point for new Wagtail projects. The project includes a basic blog setup with authors, tags, and image handling, along with a modern front-end development setup using SASS and JavaScript.

## Branches

This repository contains two main branches:

- `master`: Clean template version ready for new projects
- `with-dummy-data`: Contains example content showing how the site looks when populated

## Features

- Blog functionality with:
  - Custom page models
  - Author profiles
  - Tagging system
  - Image handling
  - Rich text editing
- Modern front-end development:
  - SASS compilation with django-compressor
  - Organized JavaScript structure
  - Component-based architecture
  - Responsive design
- Search functionality
- Admin interface
- Development and Production environments

## Project Structure

```
├── blog/               # Blog application
│   ├── models.py      # Blog models (BlogPage, BlogIndexPage)
│   ├── templates/     # Blog templates
│   └── ...
├── home/              # Home page application
│   ├── models.py      # Home page model
│   ├── templates/     # Home page templates
│   ├── static/        # Front-end assets
│   │   ├── scss/     # SASS files
│   │   │   ├── base/      # Base styles
│   │   │   ├── components/# Component styles
│   │   │   ├── layouts/   # Layout styles
│   │   │   └── main.scss  # Main SASS file
│   │   └── js/       # JavaScript files
│   │       ├── components/# JS components
│   │       ├── utils/     # Utility functions
│   │       └── main.js    # Main JS file
│   └── ...
├── search/            # Search functionality
├── wagbase/           # Project settings
│   ├── settings/      # Django settings
│   │   ├── base.py   # Base settings
│   │   ├── dev.py    # Development settings
│   │   └── production.py # Production settings
│   ├── urls.py        # URL configuration
│   └── ...
└── manage.py          # Django management script
```

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/euphroshub/wagbase.git your-project-name
   cd your-project-name
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```bash
   python manage.py migrate
   ```

5. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

6. Run the development server:
   ```bash
   python manage.py runserver
   ```

7. Access the admin interface at `http://localhost:8000/admin/`

## Front-end Development

### SASS Structure
- `base/`: Base styles, variables, and mixins
- `components/`: Reusable component styles
- `layouts/`: Layout and grid styles
- `main.scss`: Main SASS file that imports all other styles

### JavaScript Structure
- `components/`: Reusable JavaScript components
- `utils/`: Utility functions and helpers
- `main.js`: Main JavaScript file

### Development Workflow
1. Edit SASS files in `home/static/scss/`
2. Edit JavaScript files in `home/static/js/`
3. Changes are automatically compiled on save during development
4. Refresh browser to see changes

## Environment Settings

### Development (`dev.py`)
- Debug mode enabled
- SASS and JavaScript compilation on-the-fly
- Local database
- Development-specific settings

### Production (`production.py`)
- Debug mode disabled
- Optimized static files
- Production database settings
- Security settings enabled

## Customizing the Template

1. **Update Project Name**:
   - Rename the `wagbase` directory to your project name
   - Update references in `manage.py` and `wsgi.py`

2. **Add New Models**:
   - Create new apps using `python manage.py startapp app_name`
   - Add models in `models.py`
   - Register models in `wagtail_hooks.py`

3. **Customize Templates**:
   - Modify templates in the `templates` directories
   - Add new templates as needed

4. **Add Static Files**:
   - Place SASS files in `home/static/scss/`
   - Place JavaScript files in `home/static/js/`
   - Update templates to reference new static files

## Development

This project was created following the [Wagtail Getting Started Tutorial](https://docs.wagtail.org/en/stable/getting_started/tutorial.html) with additional front-end development setup.

## License

This project is available for use under the MIT License.
