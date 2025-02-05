from rest_framework import serializers

class ScriptSerializer(serializers.Serializer):
    user_input = serializers.CharField(max_length=1000)
    generated_script = serializers.CharField(max_length=1000)
