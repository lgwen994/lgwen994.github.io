---
title: How To Install Docker On Amazon Linux AMI
permalink: how_to_install_docker_on_amazon_linux_ami.html
summary: Create EC2 with Amazon Linux AMI.
published: true
tag: docker
---

* Create EC2 with Amazon Linux AMI
* Login to your EC2 with PuTTY
* Do an update of Amzon Linux
`sudo yum update`
* Now for installing docker run below command:
`sudo yum install -y docker`
* Give permission
`sudo usermod -a -G docker ec2-user`
* Start Docker Service
`sudo service docker start`
* Run below command to get docker service up automatically after reboot:
`sudo chkconfig docker on`
* We use docker's two parameters -i -t to let the container running docker implement the ability to "talk":
```
runoob @ runoob: ~ $ docker run -i -t ubuntu: 15.10 / bin / bash
root @ 0123ce188bd8: / #
```
We try to run the commands cat / proc / version and ls in the container to view the version information of the current system and the list of files in the current directory, respectively.

We can exit the container by running the exit command or using CTRL + D.
```
root @ 0123ce188bd8: / # exitexit
root @ runoob: ~ #
```
* Start container (background mode)
`runoob @ runoob: ~ $ docker run -d ubuntu: 15.10 / bin / sh -c "while true; do echo hello world; sleep 1; done" 2b1b7a428627c51ab8810d541d759f072b4fc75487eed05812646b8534a2fe63`
First, we need to confirm that the container is running. You can check it with docker ps:
```
runoob @ runoob: ~ $ docker ps
CONTAINER ID IMAGE COMMAND ...
5917eac21c36 ubuntu: 15.10 "/ bin / sh -c 'while t ..." ...
```
* Use the docker logs command on the host host to see the standard output inside the container:
`runoob @ runoob: ~ $ docker logs 2b1b7a428627`
* We use the docker stop command to stop the container:
`runoob @ runoob: ~ $ docker stop amazing_cori`
