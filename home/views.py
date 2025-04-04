from django.shortcuts import render

def styleguide(request):
    return render(request, 'home/styleguide.html') 