# Wagtail Test Project

This is a test project created to experiment with [Wagtail CMS](https://wagtail.org/) and Python for web development. The project was built following the official Wagtail tutorial to understand the core concepts and features of the Wagtail CMS.

## Project Overview

This project serves as a learning environment to:
- Understand Wagtail's content management system
- Experiment with Python web development
- Learn about Django and Wagtail integration
- Test various Wagtail features and capabilities

## Setup Instructions

1. Clone the repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
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

## Features

- Basic blog functionality
- Custom page models
- Image handling
- Rich text editing
- Admin interface

## Project Structure

- `mysite/` - Main project configuration
- `blog/` - Blog application
- `home/` - Home page application

## Development

This project was created following the [Wagtail Getting Started Tutorial](https://docs.wagtail.org/en/stable/getting_started/tutorial.html).

## License

This project is for educational purposes only.
