## prerequisites -

1. ruby 3.0
2. git

## steps to build and run the website locally

1. clone the repository 

   using git

   ```git clone https://github.com/milli-consortium/milli-consortium.github.io.git```

   OR 
   
   using the github cli

   ```gh repo clone milli-consortium/milli-consortium.github.io```

2. install ```jekyll``` and ```bundler```

3. install dependencies ```bundle install```

4. build the website ```bundle exec jekyll build```
   
   to build and serve the website locally ```bundle exec jeykyll serve```
   
   the website will be served at [http://127.0.0.1:4000//](http://127.0.0.1:4000//)

## deploying the website on github-pages

1. commit all changes to source files on the ```master``` branch

   ```git checkout master```

   ```git commit -m "commit message"```

2. commit changes to the website build (located under ```_site``` folder to the ```origin/pages``` subtree)

   ```git subtree push --prefix _site origin pages ```