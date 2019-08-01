<?php
    if($_POST){
        function getcaptcha($SecreteKey){
            $Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secrete=6LdwoK8UAAAAAAF2Y0LsyYIO4YsQ0dfijVMN6g2F&response=6LdwoK8UAAAAAAF2Y0LsyYIO4YsQ0dfijVMN6g2F");
            $Return = json_decode($Response);
            return $Return;
        }
        $Return = getcaptcha($_POST['g-recaptcha-response']);
        if($Return ->success == true && $Return->score > 0.5){
            echo "succes";
        }else{
            echo "you are a robot!!"
        }
    }   
?>