from django.shortcuts import render_to_response

# Create your views here.
def news_report(request):
    return render_to_response("news_report/news_report.html",locals())