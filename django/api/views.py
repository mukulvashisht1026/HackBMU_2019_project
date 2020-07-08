from django.shortcuts import render
import time
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
from django.http import HttpResponse

import base64



@csrf_exempt
def index(request):
    if(request.method == 'POST'):
        print(request.body)
        data = json.loads(request.body)
        print(data)

        print(data['name'])
        # print(request.POST.get('pno'))
        # image = request.FILES['filedata']
        
        # print(image)
        
        return HttpResponse(data['name'])
    if(request.method == 'GET'):
        return HttpResponse('get method')