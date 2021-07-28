<?php foreach ($items as $item) : ?>
  <?= (include_template('list-item.php', [
      'item' => $item
  ])); ?>
<?php endforeach ?>
