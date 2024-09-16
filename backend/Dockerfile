FROM python:3.10-slim

WORKDIR /backend

COPY requirements.txt .

RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose port 8000
EXPOSE 8000

# Use gunicorn for production
CMD ["gunicorn", "froshy.wsgi:application", "--bind", "0.0.0.0:8000"]