push_ecr:
	aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 143386196640.dkr.ecr.ap-south-1.amazonaws.com
	docker build -t juleo-landing-page --platform linux/amd64 --cache-from 143386196640.dkr.ecr.ap-south-1.amazonaws.com/juleo-landing-page:latest .
	docker tag juleo-landing-page:latest 143386196640.dkr.ecr.ap-south-1.amazonaws.com/juleo-landing-page:latest
	docker push 143386196640.dkr.ecr.ap-south-1.amazonaws.com/juleo-landing-page:latest