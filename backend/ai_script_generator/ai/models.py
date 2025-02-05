from django.db import models

class Script(models.Model):
    user_input = models.TextField()
    generated_script = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Script generated at {self.created_at}"
