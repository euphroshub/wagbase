# Wagtail CMS Template Project

This is a template project for [Wagtail CMS](https://wagtail.org/) that can be used as a starting point for new Wagtail projects. The project includes a basic blog setup with authors, tags, and image handling.

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
- Responsive design
- Search functionality
- Admin interface

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/euphroshub/wagtail_tutorial.git your-project-name
   cd your-project-name
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
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

## Project Structure

```
├── blog/               # Blog application
│   ├── models.py      # Blog models (BlogPage, BlogIndexPage)
│   ├── templates/     # Blog templates
│   └── ...
├── home/              # Home page application
│   ├── models.py      # Home page model
│   ├── templates/     # Home page templates
│   └── ...
├── search/            # Search functionality
├── wagbase/           # Project settings
│   ├── settings/      # Django settings
│   ├── urls.py        # URL configuration
│   └── ...
└── manage.py          # Django management script
```

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
   - Place CSS, JS, and images in the `static` directory
   - Update templates to reference new static files

## Development

This project was created following the [Wagtail Getting Started Tutorial](https://docs.wagtail.org/en/stable/getting_started/tutorial.html).

## License

This project is available for use under the MIT License.
