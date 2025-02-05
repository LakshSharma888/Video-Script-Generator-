from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests
from .forms import UploadFileForm

@csrf_exempt
def generate_script(request):
    if request.method == 'POST':
        user_input = request.POST.get('user_input')
        uploaded_file = request.FILES.get('file')

        # If file is uploaded, extract its text
        if uploaded_file:
            file_text = extract_text_from_file(uploaded_file)  # Use OCR or simple text extraction logic
            user_input += " " + file_text

        # Call X.ai API
        headers = {'Authorization': f'Bearer {X_API_KEY}'}
        data = {'prompt': user_input}
        response = requests.post("https://x.ai/api/v1/generate", headers=headers, data=data)
        return JsonResponse(response.json())
    return JsonResponse({"error": "Invalid request"}, status=400)

def extract_text_from_file(file):
    # Placeholder for file parsing logic (e.g., OCR or text extraction)
    return "Text from file"
